import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [enteredtasks, setEnteredtasks] = useState("");

  function handleChange(event) {
    setEnteredtasks(event.target.value);
  }
  function handleClick() {
    // event.preventDefault();
    onAdd(enteredtasks);
    setEnteredtasks("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredtasks}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
