import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (event) => {
  const navigate = useNavigate();
  const[emailVal,seteemailVal] = useState("");
  const email = (event)=>{
  seteemailVal(event.target.value)
  }

  const loginHandler = async(event)=>{
    try{
      event.preventDefault();
      const userEmail = document.getElementById("email").value;
      const response = await fetch("https://jsonplaceholder.typicode.com/users");  
      const user =(await( 
        (await(response.json())).find(
          (item)=> (item.email ===userEmail))))
      if (user !== undefined){
        localStorage.userinfo = JSON.stringify(user);
        navigate('/TestRoute');
      }
      else{
        throw new Error("Please enter a valid Email");  
      }
    } 
    catch(err){
      alert(err)
    }
  }
  return (
    <div className="enclosing">
      <p className="title">Log in</p>
      <form className="form" method="get">
        <input
          id="email"
          className="input"
          type="email"
          placeholder="Enter Username"
          name="uname"
          onChange={email}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="psw"
        />
        <input class="button" id="button" type="submit" value="Log In" onClick={loginHandler}/>
        {/* <Link to = "/test_route" className="button"/> */}
      </form>
    </div>
  );
};

export default Login;
