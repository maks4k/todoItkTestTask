import { FcFullTrash } from "react-icons/fc";
import type { IdataTasks } from "../todolist/TodoList";

type DelitionTask = {
  delitionTask: (id: number) => void;
  item: IdataTasks;
};

export const DelitionTask = ({ delitionTask, item }: DelitionTask) => {
  return (
    <>
      {" "}
      <div
        onClick={(e) => {
          e.stopPropagation();
          delitionTask(item.id);
        }}
      >
        <FcFullTrash size={25} />
      </div>
    </>
  );
};
