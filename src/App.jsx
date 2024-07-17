import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Heading from "./comonents/Heading";
import InputTask from "./comonents/InputTask";
import TodoItem1 from "./comonents/TodoItem1";
import ErrorMessage from "./comonents/ErrorMessage";
import "./App.css";
import { DataContext } from "./comonents/data-store";

function App() {
  let [errorMsg, setErrorMsg] = useState("");
  let [data, setData] = useState([
    { taskName: "Task One", date: "30/09/2024" },
    { taskName: "Task Two", date: "27/07/2024" },
  ]);
  const handleDeleteButton = (item) => {
    // console.log(item)
    let newData = data.filter((dataItem) => dataItem.taskName !== item);
    // console.log(newData);
    setData(newData);
    // console.log("delete clicked")
  };
  const handleAddButton = (newTask, newDate) => {
    if (newTask === "" || newDate === "") {
      setErrorMsg("Invalid Task !!!");
    } else {
      setErrorMsg("");
      let newData = [...data, { taskName: newTask, date: newDate }];
      setData(newData);
    }

    // console.log("clicked")
  };
  return (
    <DataContext.Provider value={{data,handleAddButton,handleDeleteButton}}>
      <div className="main-container">
        <center className="task-container">
          <Heading></Heading>
          <InputTask ></InputTask>
          {/* {errorMsg.length>0 && <ErrorMessage errorMsg= {errorMsg}></ErrorMessage>} */}
          {/* {data.length==0 && <ErrorMessage errorMsg= {"No any task added"}></ErrorMessage>} */}
          <ErrorMessage ></ErrorMessage>
          <TodoItem1 ></TodoItem1>
          {/* <TodoItem1
          data={}
        ></TodoItem1> */}
        </center>
      </div>
    </DataContext.Provider>
  );
}

export default App;
