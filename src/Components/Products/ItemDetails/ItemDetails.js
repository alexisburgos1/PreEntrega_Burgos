import {Link} from 'react-router-dom';
const ItemDetail = ({product}) => {
    return(
        <>
        <div className="productsContainer">
            <div className="ItemDetailStyle">
                <a href="#">
                    <img src = {product?.img}/>
                </a>
                <div className="ItemDetailStyle_footer">
                    <h1>{product?.name}</h1>
                    <p>Color: {product?.color}</p>
                    <p className="price">${product?.price}</p>
                </div>
                <div className="buttom">
                    <button className="btn"><Link to='/detail'>Add To Cart</Link></button>
                    <button className="btn"><Link to={product?.id}>View</Link></button>
                </div> 
            </div>
            
        </div>
        
    </>      
        
    );
};

export default ItemDetail;