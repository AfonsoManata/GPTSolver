// Imports needed 
require('dotenv').config();
const { createWorker } = require('tesseract.js');
const os = require('os');
const fs = require("fs");
const path = require("path");
const clipboardy = require('clipboardy');
const dir = path.join(process.env.HOME, "Desktop", "Screenshots"); // Here change to your Screenshot folder
const { OpenAI } = require('openai');
const API_KEY = process.env.API_KEY; // You can put your api key here 



// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: API_KEY,
});


function removeallfiles(directory){
  
  const files = fs.readdirSync(directory); // Reading the directory
  
  // Deleting each screenshot
  for (const file of files){  
    const filepath = path.join(directory, file); 
    fs.unlinkSync(filepath);
  }
  
}

function get_last_screenshot(directory){
  
  const files = fs.readdirSync(directory);

  files.reverse();
  
  const last_path = path.join(directory, files[0]);

  return last_path; 
}

const image = get_last_screenshot(dir);

// Using tesseract js to extract the text from the image 
const getTextFromImage = async (imagePath) => {
  const worker = await createWorker();

  const text = await worker.recognize(imagePath);
  await worker.terminate();
  return text;
};

(async () => {
  try {
    const { data: { text } } = await getTextFromImage(image);
    
   } catch (error) {
    console.error('Error:', error);
  }
})();

// Async function to send the extracted text to ChatGPT
const askChatGPT = async (question) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', 
      messages: [{ role: 'user', content: question }],
    });

    // Once the response is received, we print out the answer from ChatGPT
    console.log('Correct Answer:', response.choices[0].message.content);
  } catch (error) {
    // If there's an error, we'll catch it and log it
    console.error('Error contacting ChatGPT:', error);
  }
};

// Main async function that combines everything
(async () => {
  try {
    // First, extract text from the last screenshot
    const { data: { text } } = await getTextFromImage(image); // Wait for the text to be extracted
    console.log('Extracted Text:', text); // Log the extracted text

    // Then, send that extracted text as a question to ChatGPT
    await askChatGPT(text); // Wait for ChatGPT's response
  } catch (error) {
    // If there's an error during the process, log it
    console.error('Error:', error);
  }
})();



//if files = [] continue;
// make the folder of screenshots empty  
//removeallfiles(dir);
