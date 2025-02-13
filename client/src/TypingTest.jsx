import { useState, useEffect } from "react";
import randomParagraphs from "./paragraphs.json"; // Store longer texts in a JSON file

export default function TypingTest() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setText(getRandomParagraph());
  }, []);

  useEffect(() => {
    let timer;
    if (startTime && !isFinished) {
      timer = setInterval(() => {
        setElapsedTime(((Date.now() - startTime) / 1000).toFixed(2));
      }, 100);
    }
    return () => clearInterval(timer);
  }, [startTime, isFinished]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFinished) return;

      if (!startTime) setStartTime(Date.now());

      if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1) {
        setInput((prev) => prev + e.key);
      }

      if (input + e.key === text) {
        setIsFinished(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input, isFinished]);

  const getRandomParagraph = () => {
    const index = Math.floor(Math.random() * randomParagraphs.length);
    return randomParagraphs[index];
  };

  const calculateWPM = () => {
    if (elapsedTime <= 0) return 0;
    const words = text.split(" ").length;
    return ((words / elapsedTime) * 60).toFixed(2);
  };

  const restartTest = () => {
    setText(getRandomParagraph());
    setInput("");
    setStartTime(null);
    setElapsedTime(0);
    setIsFinished(false);
  };

  const getTextWithColors = () => {
    return text.split("").map((char, index) => {
      let colorClass = "text-white"; // Default color
      if (index < input.length) {
        colorClass = input[index] === char ? "text-green-400" : "text-red-400";
      } else if (index === input.length) {
        colorClass = "underline";
      }
      return (
        <span key={index} className={colorClass}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-900 text-white px-4">
      <h1 className="text-lg font-bold mb-4 sm:text-xl md:text-2xl text-center">Typing Speed Test</h1>
      <div className="w-full max-w-5xl p-6 bg-gray-800 rounded-lg shadow-md sm:p-8 md:p-10">
        <p className="text-md text-gray-300 mb-4 text-left sm:text-lg md:text-xl leading-relaxed">
          {getTextWithColors()}
        </p>
        <div className="mt-4 text-center">
          <p className="text-sm sm:text-md md:text-lg">⏱️ Time: {elapsedTime} sec</p>
          {isFinished && <p className="text-sm font-bold sm:text-md md:text-lg">⚡ Speed: {calculateWPM()} WPM</p>}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={restartTest}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-md"
          >
            🔄 Restart
          </button>
        </div>
      </div>
    </div>
  );
}
