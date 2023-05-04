
import { Task } from "../interfaces/task.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteAtask: (id:number) =>  void
}

const TaskList = ({ tasks, deleteAtask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        /* hago col 3 para que pueda abarcar 3 columnas de 12 de bootstrap */
        <div className="col-md-4 p-2" key={task.id}>
          <TaskCard task={task} deleteAtask={deleteAtask}/>
        </div>
      ))}
    </>
  );
};

export default TaskList;
