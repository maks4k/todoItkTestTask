import { TodoForm } from "./todoform/TodoForm";
import { TodoList } from "./todolist/TodoList";
import { useApp } from "../hooks/useApp";

export interface IdataTasks {
  id: number;
  title: string;
  isComplited: boolean;
  isEdeting: boolean;
}
export type FilterType = "all" | "active" | "completed";
function App() {
  const {
    checked,
    filter,
    activeTask,
    changeChecked,
    addTask,
    delitionTask,
    isEditingTask,
    saveEditTask,
    handleFilterChange,
  } = useApp();
  return (
    <>
      <TodoForm
        onAddTask={addTask}
        activeTask={activeTask}
        handleFilterChange={handleFilterChange}
      />
      <TodoList
        data={checked}
        changeChecked={changeChecked}
        delitionTask={delitionTask}
        isEditingTask={isEditingTask}
        saveEditTask={saveEditTask}
        filter={filter}
      />
    </>
  );
}

export default App;
