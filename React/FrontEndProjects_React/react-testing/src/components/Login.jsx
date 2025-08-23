import React, { useState } from 'react';
import axios from "axios";
import "./Login.css"

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    pwd: "",
  });
 const [nameError,setNameError]=useState("");
 const [passwordError,setPasswordError]=useState("");
 const [loading,setLoading]=useState(false);
 const [user,setUser]=useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value })); 
    if(name==="userName"){
      setNameError(validateName(value));
    }

    if(name==="pwd"){

      setPasswordError(validatePwd(value));

    }
  }

  function validateName(usernamee){

    if(!usernamee) return "Please Enter username";
    if(usernamee.length < 8) return "username must be atleast 8 characters long";
    return;
  }

  function validatePwd(passwordd){
    if(!passwordd) return "Please enter password";
    if(passwordd.length<8) return "Password must be atleast 8 characters long";
    if(!/[A-Z]/.test(passwordd)) return "password must contain an uppercase letter";
    if(!/[0-9]/.test(passwordd)) return "password must contain a number";
    if(!/[@#$%^&*]/.test(passwordd)) return "password must contain special character";
    return "";
  }

  async function handleClick(e) {
    e.preventDefault();
    
    setLoading(true);
    try{
      const {data}=await axios.get("https://jsonplaceholder.typicode.com/users/1");
       setUser(data);


    }catch{
      

    }
    setLoading(false);
    
 

   
  }

  return (
    <div className="outer">
      <span>{user.name}</span>
      <input
        placeholder='username'
        onChange={handleChange}
        value={data.userName}
        name="userName"
      />
      {nameError && <p className='error' data-testid="error">{nameError}</p>}
      <input
        placeholder='password'
        onChange={handleChange}
        value={data.pwd}
        name="pwd"
        type="password"
      />
       {passwordError && <p className='error' data-testid="error">{passwordError}</p>}
      <button onClick={handleClick} disabled={nameError || passwordError || !data.userName || !data.pwd}>{loading ? "Please wait..." : "Submit"}</button> 
      
     
    </div>
  )
}

export default Login
