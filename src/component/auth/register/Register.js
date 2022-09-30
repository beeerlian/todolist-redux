import React, { useState } from "react";
import register from "../../../services/auth/register.auth.service";
import RegisterForm from "./RegisterForm";

export default function Register() {

       const [status, setStatus] = useState("INITIAL")

       function onRegister(data) {

              setStatus("LOADING")
              register(data).then((response) => {
                     setStatus("SUCCESS");
              }).catch((error) => {
                     setStatus("FAILED");
              }).finally(() => {
                     setStatus("INITIAL");
              })
       }

       return (
              <div className="Register">
                     <p>{status}</p>
                     <p>Register</p>
                     <RegisterForm onSubmit={onRegister} />
                     <a href="/login"><button type="submit" >Go to Login</button></a>

              </div>
       );
}