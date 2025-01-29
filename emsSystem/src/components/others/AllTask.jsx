import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext)
  console.log(authData.employees)
  
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded">
       <div className="bg-emerald-400 py-2 px-4 flex justify-between rounded mb-2">
        <h3 className="w-1/5 text-lg font-medium  ">Employee Name</h3>
        <h5 className="w-1/5 text-lg font-medium">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium ">Failed</h5>
       </div>
       <div className="h-[80%]">
       {authData.employees.map(function(elem){
        return <div className="border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="w-1/5 text-lg font-medium ">{elem.firstname}</h2>
        <h3 className="w-1/5 text-lg font-medium text-blue-400">{elem.taskNumbers.newTask}</h3>
        <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskNumbers.active}</h5>
        <h5 className="w-1/5 text-lg font-medium text-green-400">{elem.taskNumbers.completed}</h5>
        <h5 className="w-1/5 text-lg font-medium text-red-400">{elem.taskNumbers.failed}</h5>
       </div>
       })}
       </div>
    </div>
  );
};

export default AllTask;