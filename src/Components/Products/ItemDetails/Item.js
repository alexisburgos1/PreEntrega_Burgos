import {Link} from 'react-router-dom';
// import ItemList from "../ItemList/ItemList";
const Item = ({product}) => {
    return(
        <>
        <div className="productsContainer">
            <div className="ItemDetailStyle">
                <a href="#">
                    <img src = {product.img}/>
                </a>
                <div className="ItemDetailStyle_footer">
                    <h1>{product.name}</h1>
                    <p>Color: {product.color}</p>
                    <p className="price">${product.price}</p>
                </div>
                <div className="buttom">
                    <Link to='/detail'><button className="btn">Add To Cart</button></Link>
                    <Link to={`/item/${product.id}`}><button className="btn">View</button></Link>

                </div> 
            </div>
            
        </div>
        
    </>      
        
    );
};

export default Item;