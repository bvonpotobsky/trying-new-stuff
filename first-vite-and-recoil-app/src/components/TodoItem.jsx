import { useRecoilState } from "recoil";
import { todoListState } from "../containers/TodoList";

import {
  replaceItemAtIndex,
  removeItemAtIndex,
} from "../utils/todo-funcionality";

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <main className="max-w-sm flex items-center justify-between my-1">
      <input
        type="checkbox"
        className="w-5 h-5 mr-2 ml-1 border-none rounded-none outline-none cursor-pointer"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />

      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        className="w-full p-1 px-2 outline-none rounded-none bg-gray-700 text-white"
      />

      <button className="ml-2 mr-1" onClick={deleteItem}>
        🗑️
      </button>
    </main>
  );
}
