import type { FilterType, IdataTasks } from "../App";
import { TodoItem } from "../todoitem/TodoItem";
import style from "./todoList.module.css";



type PropsTasks={
  data:IdataTasks[];
  changeChecked: (id: number) => void;
  delitionTask:(id:number)=>void;
  isEditingTask: (id: number, isEditing: boolean) => void
   saveEditTask: (id: number, title: string) => void
     filter:FilterType
}




export const TodoList = ({data,changeChecked,delitionTask,isEditingTask,saveEditTask,filter}:PropsTasks) => {

    const filteredTasks = data.filter(task => {
    switch (filter) {
      case "active":
        return !task.isComplited; 
      case "completed":
        return task.isComplited; 
      default: 
        return true; 
    }
  });
  return (
    <div className={style.todolist}>
      {filteredTasks.length > 0 ? (
        <ul className={style.todolist}>
          {filteredTasks.map((item) => (
            <TodoItem 
              key={item.id}
              item={item}
              changeChecked={changeChecked}
              delitionTask={delitionTask}
              isEditingTask={isEditingTask}
              saveEditTask={saveEditTask}
            />
          ))}
        </ul>
      ) : (
        <div>Нет задач</div>
      )}
    </div>
  );
  
}
