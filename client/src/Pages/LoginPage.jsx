import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";


const LoginPage = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext)
  

  async function handleLoginSubmit(e){
    e.preventDefault();
    try{
      const {data} = await axios.post("/login", {email, password});
      setUser(data);
      alert("Login Successful");
      setRedirect(true);
    } catch(err){
      alert("Login failed");
    }

  }

  if(redirect){
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <div className="mt-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="youremail@" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="primary">Login</button>
        <div className="text-center py-2 text-gray-500">Do not have an account yet ? <Link className="underline text-black" to="/register">Register One</Link></div>
      </form>
    </div>
  );
};

export default LoginPage;
