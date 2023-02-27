import './App.css';
import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ToDoList from './components/Todolist';
import Nav from './components/Nav';
import Erreur from './components/Erreur';
import Home from './components/home';
import List from './components/List';




function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todolist" element={<ToDoList/>}/>
          <Route path=":ID" element={<List/>}/>
          <Route path="*" element={<Erreur />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
