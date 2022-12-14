import "./item.css";

import{ Link } from 'react-router-dom';
import React from "react";



const Item = ({ info }) => {
   
    return(
        <div className="block">
        <Link to={`/detalle/${info.id}`} className="shoe">
        <img src={info.image} alt="" />       
        <p>{info.title}</p>
        <p>Precio: ${info.price}</p>
     </Link>
     </div>
    );
}

export default Item;