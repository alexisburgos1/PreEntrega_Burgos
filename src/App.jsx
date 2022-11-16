import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Components/Header/navbar";
import 'boxicons';
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      
    <BrowserRouter> 
      <Navbar /> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<ItemListContainer/>} />
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
