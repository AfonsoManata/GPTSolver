// Imports needed 
require('dotenv').config();
const { createWorker } = require('tesseract.js');
const os = require('os');
const fs = require("fs");
const path = require("path");
const dir = path.join(process.env.HOME, "Desktop", "Screenshots"); // Here change to your Screenshot folder
const { OpenAI } = require('openai');
const API_KEY = process.env.API_KEY; // You can put your api key here 


