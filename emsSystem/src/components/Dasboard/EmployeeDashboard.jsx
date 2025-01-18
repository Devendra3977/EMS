import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import Tasklist from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  console.log(props);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
       <Header/>
       <TaskListNumbers/>
       <Tasklist/>
    </div>
  );
};

export default EmployeeDashboard;