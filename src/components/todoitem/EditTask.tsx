import { CiEdit } from "react-icons/ci";
import type { IdataTasks } from "../todolist/TodoList";

type EditTasker = {
  item: IdataTasks;
  isEditingTask: (id: number, isEditing: boolean) => void;
};
export const EditTask = ({ item, isEditingTask }: EditTasker) => {
  return (
    <>
      {" "}
      <div
        onClick={(e) => {
          e.stopPropagation();
          isEditingTask(item.id, true);
        }}
      >
        <CiEdit size={25} />
      </div>{" "}
    </>
  );
};
