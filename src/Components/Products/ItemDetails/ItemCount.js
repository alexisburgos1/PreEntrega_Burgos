import React,{useEffect, useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]  = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

return (
        <div className="buttom">
            <button  className="btn" disabled={count <= 1}  onClick={decrease}>-</button>
            <p>{count}</p>
            <button className="btn" disabled={count >= stock} onClick={increase}>+</button>
            <br></br>
            
            <button disabled={stock <=0} onClick={() => onAdd(count)} className="btn">Add to Cart</button>
            
        </div>
    );
}

export default ItemCount;