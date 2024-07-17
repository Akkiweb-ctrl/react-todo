import { useContext, useRef } from "react";
import { DataContext } from "./data-store";

const InputTask = () => {
  const {handleAddButton} = useContext(DataContext);
 const inputForm = useRef(null);
  const handleLocalAddButton = () => {
    event.preventDefault();
    const form = inputForm.current;
    let task = form["taskInput"].value;
    let date = form["dateInput"].value;
    handleAddButton(task, date);
    form["taskInput"].value = "";
    form["dateInput"].value = "";
  };
  return (
    <div className="container text-center add-task">
        <form ref={inputForm} className="row task-items" onSubmit={handleLocalAddButton}>
          <div className="col-6">
            <input type="text" placeholder="Enter your task" name="taskInput" />
          </div>
          <div className="col-4">
            <input type="date" name="dateInput" />
          </div>
          <div className="col-2">
            <button
              className="btn btn-success action-btn"
            >
              Add
            </button>

          </div>
        </form>
    </div>
  );
};

export default InputTask;
