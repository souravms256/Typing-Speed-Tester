import React from "react";

export default function Results({ timeTaken, wpm, errors, resetTest }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Results</h2>
      <p>Time Taken: {timeTaken.toFixed(2)} sec</p>
      <p>Typing Speed: {wpm} WPM</p>
      <p>Errors: {errors}</p>
      <button
        onClick={resetTest}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Restart Test
      </button>
    </div>
  );
}