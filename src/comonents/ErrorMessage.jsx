import { useContext } from "react";
import { DataContext } from "./data-store";

const ErrorMessage = () =>{
    // console.log(data)
    const {data} = useContext(DataContext);
    return (
        <>
        {data.length===0 && <p>{"No any task added"}</p>}
        {/* {(data[0].taskName==="" || data[0].date === "") && <p>{"Invalid task"}</p>} */}
        </>
        
    )
}
export default ErrorMessage;