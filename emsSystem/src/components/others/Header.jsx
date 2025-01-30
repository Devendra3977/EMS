import React, { useState } from "react";

const Header = (props) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstname)
  // }

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl<<">Hello <br/> <span className="text-3xl font-semibold">username &#128075;</span> </h1>
      <button className="bg-red-500 font-medium text-white px-5 py-2 rounded-sm" onClick={logOutUser}>Log Out</button>
    </div>
  );
};

export default Header;