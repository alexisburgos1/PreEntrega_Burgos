import { useEffect, useState } from "react";
import {data} from "../../../../data/data";
import ItemList from "./../ItemList";
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'



const ItemsListContainer = () => {

    
    const [productList, setProductList] = useState([]);
    const {brand} = useParams();
    
    
    /* ---------------------- */
    
    const getProducts = new Promise ((resolve, rejects)=>{
      setTimeout(()=>{
        if(brand){
          const filteredData = data.filter ((item) => {
            return item.brand === brand;
          });
          
          resolve(filteredData);
        } else{
          resolve(data);
        }
        
      }, 1000)
    });
    
    /* ------------------------ */
    
    useEffect(()=>{
      getProducts.then((respuesta)=> setProductList(respuesta));
    },[brand]);
       
    
    /* ------------------------------- */
    
      return (
       
        <div className="wholeContainer">  
       
       <ItemList productList={productList}/>
    
       </div>
       
      );
    };
    
    export default ItemsListContainer;