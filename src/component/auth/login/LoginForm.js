import React from "react";


export default function LoginForm() {
       return (
              <form className="LoginForm" >
                     <input type="text" name="email" id="email"></input>
                     <input type="password" name="password" id="password"  ></input>
                     <button type="submit" >Login</button>
              </form>
       );
}