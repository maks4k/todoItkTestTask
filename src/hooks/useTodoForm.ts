import { useState } from "react";
import type { todoFotmProps } from "../components/todoform/TodoForm";

type JustAddTask = Pick<todoFotmProps, "onAddTask">;

export const useTodoForm = ({ onAddTask }: JustAddTask) => {
  const filterBtn = ["Все", "Активные", "Выполненные"];
  const filterMap = {
    Все: "all",
    Активные: "active",
    Выполненные: "completed",
  } as const;
  const [isVisibaleFilter, setIsVisibaleFilter] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const filterHandler = () => {
    setIsVisibaleFilter((prev) => !prev);
  };
  const handleTask = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };
  return {
    filterBtn,
    filterMap,
    isVisibaleFilter,
    handleChange,
    filterHandler,
    handleTask,
    inputValue,
  };
};
