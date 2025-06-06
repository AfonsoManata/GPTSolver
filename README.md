# 🚀 GemSolver: The AI Screen Assistant ✨

---

## Project Overview 💡

**GemSolver** is an innovative solution that seamlessly integrates **Computer Vision (OCR) 👁️‍🗨️** and **Artificial Intelligence (Google Gemini API) 🧠** to automate text extraction from screen captures and generate instant, highly relevant responses. We developed this project to streamline workflows by creating a direct bridge between a user's on-screen visual content and Google Gemini's cutting-edge natural language processing capabilities.

It's a powerful tool for anyone needing quick and accurate answers from visual information, ranging from troubleshooting technical issues to querying data in documents or images. **GemSolver is especially useful for scenarios where direct text copying from the screen is restricted (e.g., protected websites 🔒, image-only content 🖼️, certain PDFs).**

---

## Core Functionalities 🌟

* **Automatic Capture and Analysis:** GemSolver monitors a designated screenshots directory (e.g., default "Screenshots" folder 📸) and automatically processes the most recent image.
* **Precise Text Extraction (OCR):** It leverages `tesseract.js` to convert image-based text into digital format, ensuring high accuracy in content extraction. This is **critical for extracting text from sources that prevent traditional copy-pasting** ✂️, such as protected web pages or text embedded in images.
* **Intelligent Response Generation with Gemini AI:** GemSolver sends the extracted text to Google's `gemini-2.0-flash` model, yielding concise and direct answers.
* **Automatic Clipboard Copy:** The Gemini-generated response is automatically copied to the system clipboard (`clipboardy`), allowing for instant pasting into any application. 🚀
* **Automation and Optimization:** It eliminates the need for manual text copying and question formulation, streamlining tasks and boosting productivity. ✅

---

## Technologies Utilized 🛠️

This project demonstrates proficiency and familiarity with a modern and relevant tech stack for AI and automation solutions development:

* **Node.js:** JavaScript runtime environment for the backend. 🟢
* **Google Gemini API (`@google/generative-ai`):** Direct access to Google's cutting-edge AI models for natural language processing. 🤖
* **Tesseract.js:** JavaScript library for Optical Character Recognition (OCR), ensuring robust text extraction from images. 📄➡️💻
* **`dotenv`:** For secure management of environment variables (e.g., API keys). 🔑
* **`fs` (File System) & `path`:** Native Node.js modules for file and directory manipulation. 📂
* **`clipboardy`:** For programmatic interaction with the system clipboard. 📋

---

## Watch the Demo! 🎬

**See GemSolver in action:** Discover how this tool seamlessly extracts information from challenging sources and provides instant, intelligent answers.

[![Watch the demo video](http://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
*(Click the image to watch the video)* ▶️

---

## Getting Started 🚀

To run GemSolver locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_LINK]
    cd [YOUR_REPOSITORY_NAME]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure your Google Gemini API key:**
    Create a `.env` file in the project root with the following content:
    ```
    API_KEY="YOUR_GEMINI_API_KEY"
    ```
    Obtain your API key from [Google AI Studio](https://aistudio.google.com/). 🔑
4.  **Run the assistant:**
    ```bash
    node index.js
    ```
    The assistant will begin monitoring your "Screenshots" folder (typically located on your Desktop). 🖥️✨

---

## Potential Use Cases 🎯

* **Bypassing Copy Restrictions:** Easily extract text from websites or documents that block standard copy-paste functionalities. 🔓
* **Students:** Get quick answers to questions from textbooks, tests, or slides that might be image-based. 📚❓
* **Professionals:** Extract information from reports, invoices, or charts and get instant analysis, even when the content isn't selectable. 📊
* **Developers/Technical Support:** Copy error messages or code snippets from images and receive solutions or explanations. 🐛💡
* **General Users:** Automate information retrieval from any visual content on their screen. 🧑‍💻

---

## Contribution 🙌

Contributions are welcome! Feel free to open issues for suggestions or pull requests with improvements. 🤝

---

## License 📄

This project is licensed under the MIT License.

---
