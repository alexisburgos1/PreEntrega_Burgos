import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {data} from "./../../../data/data";

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState()
    const {id} = useParams();
    const getProduct = () => {
        const productFiltered = data.filter((product)=> {
            
            return product.id == id;
        })
        setProductSelected(...productFiltered);
        console.log(productFiltered)
    }
    useEffect(() => {
        getProduct()
    },[id])
    console.log(productSelected)
    return (
        <div>
            {productSelected &&
            
            <ItemDetails productSelected = {productSelected} />
            }
        </div>
        
    )
}

export default ItemDetailContainer;