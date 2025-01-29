import React, { useState } from "react";

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')

  

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("Task Created")
    console.log(taskTitle, taskDescription, taskDate, category, assignto)
    setTaskTitle('')
    setTaskDate('')
    setTaskDescription('')
    setCategory('')
    setAssignto('')

  }
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
    <form onSubmit={(e)=>submitHandler(e)} className="flex flex-wrap items-start justify-between w-full">
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Design" />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input 
           value={taskDate}
           onChange={(e)=>{
             setTaskDate(e.target.value)
           }}
          
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
          <input 
           value={assignto}
           onChange={(e)=>{
             setAssignto(e.target.value)
           }}
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee name" />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input 
           value={category}
           onChange={(e)=>{
             setCategory(e.target.value)
           }}
          
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, ect.." />
        </div>
      </div>
      <div className="w-2/5 flex flex-col item-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea 
         value={taskDescription}
         onChange={(e)=>{
           setTaskDescription(e.target.value)
         }}
        
        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" name="" id="" cols="30" rows="10"></textarea>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Craete Task</button>
      </div>

      
    </form>
  </div>
  );
};

export default CreateTask;