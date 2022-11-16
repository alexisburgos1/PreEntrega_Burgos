import React from "react";
import videoJ from "./../../img/video.mp4";

const Home = () => {

      return (
       <>
       
       <div className="prodStyle">
       <h1>Welcome to Sneakers L*ver</h1>
       <br></br>
       <video width="1000" height="550" autoPlay>
        <source src={videoJ} type="video/mp4"/>
        
        </video>
        </div>
       
       </>
      )
    }
    
    export default Home;