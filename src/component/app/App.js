import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import Todo from '../toto-app/todo/Todo';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Todo />} />
            <Route path="todo" element={<Todo />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
