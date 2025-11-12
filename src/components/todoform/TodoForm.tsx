
import style from "./todoForm.module.css";
import { FaFilter } from "react-icons/fa";
import type { FilterType } from "../App";
import { useTodoForm } from "../../hooks/useTodoForm";

export type todoFotmProps = {
  onAddTask: (title: string) => void;
  activeTask: number;
  handleFilterChange: (filter: FilterType) => void;
};


export const TodoForm = ({
  onAddTask,
  activeTask,
  handleFilterChange,
}: todoFotmProps) => {


  
const{filterBtn,filterMap,isVisibaleFilter,handleChange,filterHandler,handleTask,inputValue
}=useTodoForm({onAddTask})




  return (
    <div className={style.todoForm}>
      <span className={style.activeTasks}>
        Осталось активных задач {activeTask}
      </span>
      <div className={style.todoFormHeading}>
        <h1 className={style.todoFormHeader}>Список моих задач</h1>
        <div className={style.todoFilter}>
          <div className={style.todoFilterIcon} onClick={filterHandler}>
            <FaFilter />
          </div>{" "}
        </div>
        {isVisibaleFilter && (
          <ul className={style.todoFormSpisok}>
            {filterBtn.map((filter) => (
              <li
                key={filter}
                className={style.todoFormList}
                onClick={() =>
                  handleFilterChange(
                    filterMap[filter as keyof typeof filterMap]
                  )
                }
              >
                {filter}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={style.todoFormWrapper}></div>
      <input
        className={style.todoFormInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <div>
        <button className={style.todoFormButton} onClick={handleTask}>
          Добавить задачу
        </button>
      </div>
    </div>
  );
};
