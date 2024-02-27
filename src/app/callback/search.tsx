import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("Search rendered!");

  return (
    <input
      className="p-4 border border-red-500 rounded-lg"
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
