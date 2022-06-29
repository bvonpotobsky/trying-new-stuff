import { atom, useRecoilValue, selector } from "recoil";

import TodoItemCreator from "../components/TodoItemCreator";
import TodoListStats from "../components/TodoListStats";
import TodoListFilters from "../components/TodoListFilters";
import TodoItem from "../components/TodoItem";

export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-start mx-auto bg-gray-900 font-sans">
      <h1 className="text-center text-2xl my-4 text-white">Todo List</h1>

      {todoList?.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}

      <TodoItemCreator />
      <TodoListStats />
      <TodoListFilters />
    </main>
  );
}
