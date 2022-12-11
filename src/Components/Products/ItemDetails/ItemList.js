import Item from './Item';
import React from 'react';
const ItemList = ({productList}) => {
    return (
      <>
      
      {productList.map( (product)=>(
      <Item key={product.id} product={product}/>
    ) )}
  
      </>
    )
  }
  
  export default ItemList;