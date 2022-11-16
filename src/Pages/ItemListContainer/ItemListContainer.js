import { useEffect, useState } from "react";
import {data} from "../../data/data";
import ItemList from "../../Components/Products/ItemDetails/ItemList";
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'



const ItemsListContainer = () => {


    const {categoriaId} = useParams();
    const [productList, setProductList] = useState([]);
    
    /* ---------------------- */
    
    const getProducts = new Promise ((resolve, rejects)=>{
      setTimeout(()=>{
        resolve(data)
      }, 1000)
    })
    
    /* ------------------------ */
    
    useEffect(()=>{
      getProducts.then((respuesta)=>{
        if(categoriaId){
      setProductList(respuesta.filter((data) => data.category === categoriaId ))
        } else {
          setProductList(respuesta)
        }
      });
      setTimeout(()=>{
      }, 1000)
    }, [categoriaId]);
    
    /* ------------------------------- */
    
      return (
       <>
       <div>
       
       <ItemList productList={productList}/>
    
       </div>
       </>
      )
    }
    
    export default ItemsListContainer