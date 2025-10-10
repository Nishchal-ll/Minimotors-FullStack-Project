import React, {useState} from "react";
import axios from "axios";

export default function Account(){
  const [form,setForm]=useState({name:'',email:'',password:'',password_confirmation:''});
  const [isRegister,setIsRegister]=useState(false);

  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const endpoint = isRegister ? "register" : "login";
      const res = await axios.post(`http://127.0.0.1:8000/api/clients/${endpoint}`,form);
      localStorage.setItem("client_name",res.data.user.name); // store user info
      alert(`Welcome ${res.data.user.name}`);
      window.location.href = "https://localhost:5173/";
    } catch(err){
      alert(err.response?.data?.message || "Error");
    }
  }

  return (
    <div style={{maxWidth:400,margin:'auto'}}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />}
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
        {isRegister && <input type="password" name="password_confirmation" placeholder="Confirm Password" value={form.password_confirmation} onChange={handleChange} required />}
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={()=>setIsRegister(!isRegister)}>{isRegister ? "Already have account? Login" : "No account? Register"}</button>
    </div>
  );
}
