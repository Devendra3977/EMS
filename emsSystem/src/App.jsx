import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dasboard/EmployeeDashboard";
import AdminDashboard from "./components/Dasboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  const [apidata, setApidata]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setApidata(data))
    .catch(error => console.error("Error in APi Fetching", error));
  },[]);
   
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }
  },[])

  const handleLogin =(email, password)=>{
     if(email == 'admin@me.com' && password == '123'){
      setUser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin"}));
     }
     else if(authData){
      const employee =  authData.employees.find((e)=>email == e.email && e.password == password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role:"employee", data:employee}));
      }
     }
     else{
      alert("Invalid credentials");
      console.log("galat eamil & pass");
     }
  }
  
  return (
    <>
   {!user ? <Login handleLogin={handleLogin}/> : ""}
   { user == 'admin' ? <AdminDashboard/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
   <div className="bg-red-500 p-4 h-[200px] w-[200px] m-4 overflow-auto">
    <ul className="center">
       {apidata.map(item=>(
        <li key={item.id}>{item.address.city}</li>
       ))}
    </ul>
   </div>
    </>
  );
};

export default App;