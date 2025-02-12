// Imports needed 
require('dotenv').config();
const { createWorker } = require('tesseract.js');
const os = require('os');
const fs = require("fs");
const path = require("path");
const dir = path.join(process.env.HOME, "Desktop", "Screenshots"); // Here change to your Screenshot folder
const { OpenAI } = require('openai');
const API_KEY = process.env.API_KEY; // You can put your api key here 


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




//if files = [] continue;
// make the folder of screenshots empty  
//removeallfiles(dir);
