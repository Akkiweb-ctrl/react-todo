import { useContext } from "react";
import { DataContext } from "./data-store";

const TodoItem1 = () => {
  const {data, handleDeleteButton} = useContext(DataContext);
  return (
    <div className="container text-center task-items">
      {data.map((item) => {
        return (
          <div className="row task-item">
            <div className="col-6">
              <span>{item.taskName}</span>
            </div>
            <div className="col-4">
              <span>{item.date}</span>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger action-btn" onClick={()=>handleDeleteButton(item.taskName)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem1;
