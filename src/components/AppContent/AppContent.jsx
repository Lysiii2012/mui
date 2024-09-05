import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import TodoList from "../Swapi/TodoList/TodoList";
import Todos from "../Todos/Todos";
import NotFound from "../NotFound/NotFound"; 
import Footer from "../Footer/Footer"


function AppContent() { 
  
    return (
      <div className="dark-theme">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/todos" element={<Todos/>} />
            <Route path="/swapi" element={<TodoList/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }

  export default AppContent;