import React from "react";
import { ItemListContainer } from "./ItemListContainer";
import ReactDom from 'react-dom/client';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ItemListContainer message/>
        <ItemListContainer bye/>
    </React.StrictMode>
);