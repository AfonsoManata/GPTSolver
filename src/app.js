// Imports needed 
require('dotenv').config({ path: '../.env' });
const { createWorker } = require('tesseract.js');
const os = require('os');
const fs = require("fs");
const path = require("path");
const clipboardy = require('clipboardy');
const dir = path.join(process.env.HOME, "Desktop", "Screenshots"); // Here change to your Screenshot folder
const { OpenAI } = require('openai');
const API_KEY = process.env.API_KEY; // You can put your api key here 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

//Using tesseract js to extract the text from the image 
const getTextFromImage = async (imagePath) => {
  const worker = await createWorker();

  const text = await worker.recognize(imagePath);
  await worker.terminate();
  return text;
};


const askChatGPT = async (question) => {
  
  try {
    // Customizing the output of ChatGPT 
    const p = "If is a multiple choice give me the letter of the correct answer.";
    const s = " If not, you give me the answer without explanations";
    const f = "---->";
    
    const ask = p + s + f + question;
   
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', 
      messages: [{ role: 'user', content: ask }],
    });
    
    clipboardy.writeSync(response.choices[0].message.content);
    console.log('Correct Answer:', response.choices[0].message.content);
    console.log("The correct answer is in your cliboard.");
    console.log("You can paste it using Ctrl + v");
  
  }catch (error) {
    console.error('Error contacting ChatGPT:', error);
  }
};

// Main async function that combines everything
(async () => {
  try {
    console.log("If you have used all your quota in ChatGPT this program will show a complex error.")
    console.log("Waiting for screenshots. Type Ctrl+C to Stop");
    while (true) 
    { 
      const files = fs.readdirSync(dir); 
      await sleep(500);

      if (files.length !== 0){ 
        const image = get_last_screenshot(dir);
        const { data: { text } } = await getTextFromImage(image); 
        await askChatGPT(text);
        removeallfiles(dir);
        console.log("Waiting for screenshots. Type Ctrl+C to Stop");
      }
    }
  }catch (error) {
    console.error('Error:', error);
  }
})();




