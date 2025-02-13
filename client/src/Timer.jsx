import React from "react";

export default function Timer({ isFinished, timeTaken }) {
  return (
    <div className="mt-4">
      {!isFinished && <p className="text-lg">Time: {timeTaken.toFixed(2)} seconds</p>}
    </div>
  );
}