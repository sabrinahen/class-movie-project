import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import AllMovies from "./components/AllMovies";
import NewMovie from "./components/NewMovie";
import OneMovie from "./components/OneMovie";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route element={<AllMovies/>} path="/" />
        <Route element={<NewMovie/>} path="/new" />
        <Route element={<OneMovie/>} path="/movie/:id" />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
