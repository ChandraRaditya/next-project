"use client";

import { useMemo, useState } from "react";
import { initialItems } from "@/app/utils/index";

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  // percobaan ga pakai useMemo
  // const selectedItem = items.find((item) => item.isSelected);

  // percobaan useMemo isSelected
  // const selectedItem = useMemo(() => {
  //   return items.find((item) => item.isSelected);
  // }, [items]);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button
        className="p-4 bg-red-500 text-white rounded-xl w-[200px]"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Demo;
