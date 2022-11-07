import React from "react";
export const ItemListContainer = ({message, bye}) => {
    return(
        <div className="ItemListContainerStyle">
            <div className="titleStyle">
                <h1>Products</h1>
            </div>
            <div className="prodStyle">

                
                <p>{message}</p>
                
                
                
                <div className="bugStyle">
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <box-icon name='bug' type='solid' animation='spin'></box-icon>
                    <br></br>
                </div>
                <p>{bye}</p>

            </div>
        </div>
    );
}