# 🚀 GPTSolver – Your Smart Assistant! 🤖  
GPTSolver is a powerful tool that **extracts text from screenshots** and **uses ChatGPT api** to provide automatic answers! 📸➡️🧠 It monitors your screenshot folder, reads the text using **OCR (Tesseract.js)**, and sends the question to **ChatGPT**, automatically copying the answer to your clipboard! ✨  

## 🛠️ Technologies Used  
✅ **Node.js** - Main engine of the project  
✅ **Tesseract.js** - Text recognition (OCR)  
✅ **OpenAI API** - ChatGPT provides answers  
✅ **Clipboardy** - Automatically copies the answer  
✅ **Dotenv** - Manages environment variables  
✅ **Filesystem (fs)** - Handles screenshots  

## 📌 Requirements  
🔹 **Node.js installed** on your system  
🔹 **OpenAI account** to get an API Key  
🔹 **Set up the folder** where screenshots are saved  

## 📥 Installation  
### 1️⃣ **Clone the repository:**  
```sh  
git clone https://github.com/AfonsoManata/GPTSolver.git
```
### 2️⃣ **Install all dependencies**
```sh  
npm install
```
### 3️⃣ **Set your own Api Key**
```sh  
API_KEY=your_openai_api_key  
```

## 🚀 How to Use?

### 1️⃣ **Run the program:**
```sh  
cd src
node app.js
```
### 2️⃣ **Now just take screenshots! 📸 GPTSolver is watching!**

🔹 Whenever a screenshot is detected:

✅ Text is extracted 📝

✅ ChatGPT analyzes the question 🤔💡

✅ The answer is automatically copied to your clipboard!✨

💡 You can simply paste it (Ctrl + V) anywhere!

### ⚠️ Important Notes

❌ If you exceed ChatGPT’s API quota, errors may occur.

🗑️ The program automatically deletes screenshots after processing them.
