import style from "./inputEdit.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import type { IdataTasks } from "../todolist/TodoList";
type EditProps = {
  editTask: string;
  editValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  saveEditTask: (id: number, title: string) => void;
  item: IdataTasks;
  isEditingTask:(id: number, isEditing: boolean) => void;
};
export const InputEdit = ({
  editTask,
  editValue,
  saveEditTask,
  item,
  isEditingTask
}: EditProps) => {
  return (
    <div className={style.editInputWrapper}>
      <input
        className={style.editInput}
        type="text"
        value={editTask}
        onChange={editValue}
      />
      <div className={style.editButton}>
        <button
          className={style.editInputbutton}
          onClick={() => saveEditTask(item.id, editTask)}
        >
          <IoCheckmarkOutline size={25} color="green" />
        </button>
        <button className={style.editInputbutton} onClick={() =>{isEditingTask(item.id, false)}}>
          <FaTimes size={25} color="red" />
        </button>
      </div>
    </div>
  );
};
