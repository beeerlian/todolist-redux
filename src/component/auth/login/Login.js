import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
       return (
              <div className="Login">
                     <p>Login</p>
                     <LoginForm />
                     <a href="/register"><button type="submit" >Go to register</button></a>
              </div>
       );
}