# Typing Speed Test

## Overview
This is a **MonkeyType-style** typing speed test built using **React and Tailwind CSS**. The application displays a random paragraph, and users can type directly into the interface without an input field. Words are color-coded to indicate correctness, and the typing speed is calculated in **Words Per Minute (WPM)**.

## Features
✅ **No Input Field** – Users type directly into the displayed paragraph.
✅ **Real-Time Highlighting** – Correct letters are green, incorrect ones are red, and the next letter is underlined.
✅ **Automatic Timer** – Timer starts when typing begins and stops when the paragraph is completed.
✅ **Backspace Support** – Users can fix mistakes like in MonkeyType.
✅ **Random Paragraphs** – Displays different paragraphs from a JSON file.
✅ **Restart Button** – Resets the test with a new paragraph.

## Tech Stack
- **React** (Functional Components + Hooks)
- **Tailwind CSS** (For styling)
- **JavaScript (ES6+)**

## Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/typing-speed-test.git
cd typing-speed-test
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the project
```sh
npm start
```

The app will be available at **http://localhost:3000/**

## File Structure
```
📂 typing-speed-test
├── 📁 src
│   ├── 📄 TypingTest.jsx   # Main typing test component
│   ├── 📄 index.js         # React entry point
│   ├── 📄 App.js           # App component
│   ├── 📄 sentences.json   # JSON file containing sample text
├── 📄 package.json         # Dependencies & scripts
├── 📄 tailwind.config.js   # Tailwind CSS configuration
└── 📄 README.md            # Project documentation
```

## How It Works
1. When the page loads, a **random paragraph** is selected.
2. Users start typing, and the **timer begins automatically**.
3. Correct letters turn **green**, incorrect ones turn **red**, and the **next character is underlined**.
4. When the entire paragraph is typed correctly, the **WPM score** is displayed.
5. Users can **restart the test** to try again with a new paragraph.

## Customization
- Modify **sentences.json** to add your own sample paragraphs.
- Adjust **Tailwind CSS classes** to change styles.

## Future Enhancements
🔹 Add **dark/light mode toggle**
🔹 Include **difficulty levels** (easy, medium, hard)
🔹 Track **highest WPM score**
🔹 Add **typing accuracy percentage**

## License
This project is open-source under the **MIT License**.

---

🚀 **Happy Typing!** 🚀

