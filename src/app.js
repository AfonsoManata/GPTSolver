// Imports needed 
require('dotenv').config();
const { recognize } = require('tesseract.js');
const fs = require("fs");
const path = require("path");
const clipboardy = require('clipboardy');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load API key from .env
const API_KEY = process.env.API_KEY;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const dir = path.join(process.env.HOME || process.env.USERPROFILE, "Desktop", "Screenshots");

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

function removeallfiles(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filepath = path.join(directory, file);
    fs.unlinkSync(filepath);
  }
}

function get_last_screenshot(directory) {
  const files = fs.readdirSync(directory).sort((a, b) => {
    return fs.statSync(path.join(directory, b)).mtime - fs.statSync(path.join(directory, a)).mtime;
  });
  return path.join(directory, files[0]);
}

const getTextFromImage = async (imagePath) => {
  try {
    const { data: { text } } = await recognize(imagePath, 'eng');
    return text;
  } catch (error) {
    console.error("Erro em getTextFromImage:", error);
    throw error;
  }
};

const askGemini = async (question) => {
  const prefix = "If is a multiple choice give me the letter of the correct answer.";
  const suffix = "If not, you give me the answer without explicações.";
  const prompt = `${prefix}${suffix}---->${question}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const answer = response.text().trim();

  await clipboardy.write(answer);
  console.log("Correct Answer:", answer);
  console.log("The correct answer is in your clipboard. (Ctrl + V to paste)");

  return answer;
};

// Main async function that combines everything
(async () => {
  try {
    console.log("Using Gemini API. Waiting for screenshots. Type Ctrl+C to Stop");
    while (true) {
      const files = fs.readdirSync(dir);
      await sleep(500);
      if (files.length !== 0) {
        const image = get_last_screenshot(dir);
        console.log("Última imagem:", image);
        const text = await getTextFromImage(image);
        console.log("Text:", text.trim());
        await askGemini(text);
        console.log("Waiting for screenshots. Type Ctrl+C to Stop");
        removeallfiles(dir);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();

