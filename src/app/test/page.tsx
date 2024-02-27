"use client";

import React, { useState, useCallback } from "react";

// test coba2, tidak teralalu penting, hanya mencoba kalau useState apakah akan me-rerender seluruh komponen
function ExpensiveComponent() {
  const [count, setCount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateExpensiveValue = useCallback(() => {
    setResult(count * 2);
  }, [count]);

  // const calculateExpensiveValue = () => setResult(count * 2);

  console.log("render");

  return (
    <div>
      <p>Increment: {count}</p>
      <p>Calculate: {result}</p>
      <button
        className="p-4 w-[100px] bg-red-300"
        onClick={() => setCount((current) => current + 1)}
      >
        Increment
      </button>
      <button
        className="p-4 w-[100px] bg-green-300"
        onClick={calculateExpensiveValue}
      >
        Calculate
      </button>
    </div>
  );
}

export default ExpensiveComponent;
