
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

import style from "./todoITem.module.css";
import { EditTask } from "./EditTask";
import { DelitionTask } from "./DelitionTask";
import { useState } from "react";
import { InputEdit } from "./InputEdit";
import type { IdataTasks } from "../App";

type TodoItemProps = {
  item: IdataTasks;
  changeChecked: (id: number) => void;
  delitionTask: (id: number) => void;
  isEditingTask: (id: number, isEditing: boolean) => void;
  saveEditTask: (id: number, title: string) => void;
};

export const TodoItem = ({
  item,
  changeChecked,
  delitionTask,
  isEditingTask,
  saveEditTask,
}: TodoItemProps) => {
  const [editTask, setEditTask] = useState(item.title);

  const editValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask(event.target.value);
  };

  return item.isEdeting ? (
    <InputEdit
      editTask={editTask}
      editValue={editValue}
      saveEditTask={saveEditTask}
      item={item}
      isEditingTask={isEditingTask}
    />
  ) : (
    <li onClick={() => changeChecked(item.id)} className={style.todoItem}>
      <div>
        {item.isComplited ? (
          <GoCheckCircle size={25} color="purple" />
        ) : (
          <MdOutlineRadioButtonUnchecked size={25} color="purple" />
        )}
      </div>
      <span className={item.isComplited ? style.completedText : ""}>
        {item.title}
      </span>
      <div className={style.todoItemWrapper}>
        <EditTask item={item} isEditingTask={isEditingTask} />
        <DelitionTask delitionTask={delitionTask} item={item} />
      </div>
    </li>
  );
};
