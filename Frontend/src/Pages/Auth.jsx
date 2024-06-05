import { useState } from "react";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5300/";

const Auth = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("login");
  const [errors,setErrors]  = useState("")
  const [auth, setAuth] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { username, email, password } = auth ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors={}
  if (password.length < 5) {
      errors.password = "Password must be at least 6 characters long";
  }
setErrors(errors)
    const requestData = { username, email, password };

   if(Object.keys(errors).length === 0){
    try {
      let response;
      if (type === "signup") {
        response = await axios.post("/user/signup", requestData);
        alert("Signup successful");
      } else {
        response = await axios.post("user/login", requestData);
        alert("Login successful");
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);

      setAuth({
                 username: "", 
                 email: "", 
                password: "" 
              });

         navigate("/");
          
    } catch (error) {
      console.error("Error", error);
      if (type === "signup") {
        alert("Email already exists");
      } else {
        alert("Useer not found");

      }
      setAuth({
        username: "", 
        email: "", 
       password: "" 
      });
    }
   }
  };

  return (
    <div className="formcenter">
      <form className="form" onSubmit={handleSubmit}>
        
        {type === 'login' ? 
             <h1>Login</h1> :
             <h1>Signup</h1>}
        
        
        {
        type === 'signup' ?(
          <LabeledInput type="text" placeholder="Username" id="Username" onChange={(e) => setAuth({ ...auth, username: e.target.value })} />
        ):null}


       
        <LabeledInput type="email" placeholder="Email" id="Email" onChange={(e) => setAuth({ ...auth, email: e.target.value })} />
        <LabeledInput type="password" placeholder="Password" id="Password" onChange={(e) => setAuth({ ...auth, password: e.target.value })}  error={errors.password}  /><span className="formicons"><IoEyeSharp /></span>
        
        
        {type === 'login' ? <Button type="submit" name="Login" /> : <Button type="submit" name="Signup" />}
        
        
        {type === 'login' ?
          <p><Link className="formlink" to="/email"><span>Forgot Password ?</span></Link><br /><br />   Don't have an account? <span className="formp" onClick={() => setType("signup")}>Sign up</span></p> :
          <p>Already have an account? <span className="formp" onClick={() => setType("login")}>Login</span></p>}
      </form>
    </div>
  );
};

function LabeledInput({ type, placeholder, id, onChange,error}){
  return (
    <label htmlFor={id}>
      <h3>{id}</h3>
      <input className="forminput" type={type} placeholder={placeholder} id={id} onChange={onChange} required />
      {error && <span className='error'>{error}</span>}
    </label>
  );
}

function Button({ type, name }) {
  return <button className="formbutton" type={type}>{name}</button>;
}

export default Auth;
