import {Link} from 'react-router-dom';
// import ItemList from "../ItemList/ItemList";

const Item = ({product}) => {
    return(
        <Link to={`/item/${product.id}`}>
        
        <div className="productsContainer">
            <div className="ItemDetailStyle">
                
                    <img src = {product.img}/>
                
                <div className="ItemDetailStyle_footer">
                    <h1>{product.name}</h1>
                    <p>{product.color}</p>
                    <p className="price">${product.price}</p>
                </div>
                <div className="buttom">
                    
                    <Link to={`/item/${product.id}`}><button className="btn">Information</button></Link>

                </div> 
            </div>
            
        </div>
         
        </Link>
         
        
    );
};

export default Item;