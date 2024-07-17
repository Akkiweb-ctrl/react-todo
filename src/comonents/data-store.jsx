import { createContext } from "react";

export const DataContext = createContext({
  data : [],
  handleAddButton : ()=>{},
  handleDeleteButton : ()=>{},
});
