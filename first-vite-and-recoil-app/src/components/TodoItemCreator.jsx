import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../containers/TodoList";

export default function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);

  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (!inputValue) return;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: new Date(Date.now()).getTime(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="max-w-xl flex items-center mt-1.5">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="w-full rounded-none outline-none h-full px-2 bg-gray-700 text-white"
      />
      <button
        className="px-4 my-2 border border-gray-700 text-white h-full"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
}
