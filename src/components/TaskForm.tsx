import { ChangeEvent, FormEvent, useState, useRef} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/task.interface";

interface Props {
  addNewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};



const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null)

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
    inputTitle.current?.focus()
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask} action="">
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary ">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
