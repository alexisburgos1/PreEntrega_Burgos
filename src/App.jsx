import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Components/Header/navbar";
import 'boxicons';
import Home from "./Pages/Home/Home";
import ItemListContainer from "./Components/Products/ItemDetails/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Products/ItemDetails/ItemDetailContainer";

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter> 
        <Navbar /> 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br><br></br>
          <br></br>
          <div className="Cards">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail' element={<ItemListContainer/>} />
            <Route path='/detail/:brand' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
          </div>
      </BrowserRouter>
        
    </div>
    
  );
}

export default App;
