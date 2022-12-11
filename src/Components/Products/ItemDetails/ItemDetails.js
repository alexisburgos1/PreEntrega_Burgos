import {useState} from 'react';
import ItemCount from "./ItemCount";
const ItemDetails = ({productSelected}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="productsContainer">
            <div className="ItemDetailStyle">
                <img src = {productSelected.img}/>
                <div className="ItemDetailStyle_footer">

                    <h1>{productSelected.name}</h1>
                    <p>{productSelected.color}</p>
                    <p className="price">${productSelected.price}</p>
                    
                    <br></br><ItemCount initial={1} stock={5} />
                    
                </div>
            
                </div>  
                
        </div>
      );
  };
  
  export default ItemDetails;