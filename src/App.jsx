import React from "react";
import {Navbar} from "./Components/Header/navbar"
import {ItemListContainer} from "./Components/Products/ItemListContainer"
import 'boxicons';
import ReactDom from 'react-dom/client';



function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <ItemListContainer message="Welcome! We're sorry to let you know that this site is on Maintenance" bye ="Come back soon!!"/>
    

      
      
    </div>
  );
}

export default App;
