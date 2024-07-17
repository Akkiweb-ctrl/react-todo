const TodoItem2 = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <span>Task Two</span>
        </div>
        <div className="col-4">
          <span>27/09/2024</span>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem2;