import React from "react";
import './login.css';
const Login = ()=>{
    return(
        <center>
           <div className="login-page">
               <h2>Sign in with email</h2>
               <p>Make a database with json and document with this login</p>
               <form >
                <div className="form-control">
                <div>📧<input type="email" placeholder="Enter your email" /></div>
                <div>🔐<input type="password" placeholder="Enter your password" /></div>
                <div><a href="#" className="forget">Forgot password</a></div>
                <div><button type="submit">login</button></div>
                </div>
               </form>
           </div>
        </center>
    );
}

export default Login