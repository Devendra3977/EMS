import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log("eamil is ", email);
        console.log("password is ", password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form  onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col">
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                required className=" border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 outline-none bg-transparent  " type="email" placeholder="Enter Your Email"/>
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required className=" border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400 outline-none bg-transparent  " type="password" placeholder="Enter Your password"/>
                <button className="text-white border-none outline-none  text-xl py-3 px-5 mt-5 rounded-full bg-emerald-600  ">Login</button>
            </form>
        </div> 
    </div>
  );
};

export default Login;