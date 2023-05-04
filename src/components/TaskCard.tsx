
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
  deleteAtask: (id: number) => void
}

const TaskCard = ({task, deleteAtask}: Props) => {
  return (
    <div className="card card-body bg-secondary">
        <h2>{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p> 
        <button className="btn btn-danger" onClick={() => task.id && deleteAtask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
