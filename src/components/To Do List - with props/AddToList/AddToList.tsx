import { useState, FormEvent } from "react";
import "./AddToList.scss";

interface IAddToDoProps {
  addToDo: (t: string) => void;
}

export const AddToList = (props: IAddToDoProps) => {
  const [toDoText, setToDoText] = useState("");
  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    props.addToDo(toDoText);

    setToDoText("");
  };

  
  return (
    <div className="card pink-card text-white bg-pink">
      <div className="card-header">Add To-Do</div>
      <div className="card-body">
        <form onSubmit={handleSave} className="d-flex flex-column my-auto">
          <input
            className="form-control mb-3"
            placeholder="add something"
            value={toDoText}
            onChange={(e) => setToDoText(e.target.value)}
          />
          <button type="submit" className="btn btn-pink  w-100">
            Save
          </button>
        </form>
      </div>
    </div>

  );
};
