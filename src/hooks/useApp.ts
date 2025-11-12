import { useEffect, useState } from "react";
import type { FilterType, IdataTasks } from "../components/App";

const data = [
  { id: 1, title: "Создать приложение", isComplited: false, isEdeting: false },
];

export const useApp = () => {
  const [checked, setChecked] = useState<IdataTasks[]>(() => {
    try {
      const saveData = localStorage.getItem("todos");
      return saveData ? JSON.parse(saveData) : data;
    } catch (error) {
      console.error(
        error,
        "Ошибка Локального хранилища ,попробуйте перезагрузить страницу"
      );
      return data;
    }
  });
  const [filter, setFilter] = useState<FilterType>("all");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(checked));
  }, [checked]);

  const activeTask: number = checked.filter(
    (task) => task.isComplited === false
  ).length;
  const changeChecked = (id: number) => {
    const newArray = checked.map((task) => {
      if (task.id === id) {
        return { ...task, isComplited: !task.isComplited };
      }
      return task;
    });
    setChecked(newArray);
  };
  const addTask = (title: string) => {
    const createTask = {
      id: Date.now(),
      title,
      isComplited: false,
      isEdeting: false,
    };
    setChecked([...checked, createTask]);
  };

  const delitionTask = (id: number) => {
    const filtedDelitionTask = checked.filter((task) => task.id !== id);
    setChecked(filtedDelitionTask);
    console.log(filtedDelitionTask);
  };

  const isEditingTask = (id: number, isEdeting: boolean) => {
    const newArray = checked.map((task) => {
      if (task.id === id) {
        return { ...task, isEdeting: isEdeting };
      }
      return task;
    });
    setChecked(newArray);
  };
  const saveEditTask = (id: number, title: string) => {
    const newArray = checked.map((task) => {
      if (task.id == id) {
        return { ...task, title: title, isEdeting: false };
      }
      return task;
    });
    setChecked(newArray);
  };
  const handleFilterChange = (filter: FilterType) => {
    setFilter(filter);
  };
  return {
    checked,
    data,
    filter,
    activeTask,
    changeChecked,
    addTask,
    delitionTask,
    isEditingTask,
    saveEditTask,
    handleFilterChange,
  };
};
