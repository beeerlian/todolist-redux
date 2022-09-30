import React from "react";



export default function RegisterForm(props) {
       let name, email, password, age;
       function onSubmit(e) {
              const data = {
                     name: name,
                     email: email,
                     age: age,
                     password: password
              }
              props.onSubmit(data)
              e.preventDefault()
       }

       return (
              <form className="RegisterForm" onSubmit={onSubmit} >
                     <input type="text" name="name" id="name" onChange={(e) => { name = e.target.value }} ></input>
                     <input type="text" name="email" id="email" onChange={(e) => { email = e.target.value }} ></input>
                     <input type="number" name="age" id="age" onChange={(e) => { age = e.target.value }} ></input>
                     <input type="password" name="password" id="password" onChange={(e) => { password = e.target.value }} ></input>
                     <button type="submit" >Register</button>
              </form>
       );
}