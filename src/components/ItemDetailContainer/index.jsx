import React, { useEffect, useState} from "react";

import "./itemDetailContainer.css";
import ItemDetail from "../ItemDetail";
import {useParams} from "react-router-dom";

const shoes = [
    {id: 1, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d6b01c6-7970-427a-8d0f-7dd8642d280a/air-force-1-07-lv8-ut-zapatillas-rvlqzd.png', 
    category: "hombres", title: 'Nike Air Force 107 LV8 UT'},
    {id: 2, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjrheo7cjgrv6opt8txu/air-force-1-07-wb-zapatillas-MdQ07C.png', 
    category: "hombres", title: 'Nike Air Force 1 07 WB'},
    {id: 3, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1c2315f-62cf-4992-8eba-df716526cb86/air-force-1-react-zapatillas-G09PQp.png', 
    category: "hombres", title: 'Nike Air Force 1 React'},
    {id: 4, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2c3ba51-ec44-4a3d-b325-83f6f1a5345f/air-force-1-07-zapatillas-6WHfZ5.png', 
    category: "mujeres", title: 'Nike Air Force 1 07'},
    {id: 5, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cb2a639-a346-4884-80c8-477f3c621932/air-force-1-low-pltaform-zapatillas-jXdthw.png', 
    category: "mujeres", title: 'Nike Air Force 1 Low PLT.AF.ORM'},
    {id: 6, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e13c3bf5-7f52-4d89-ba6b-4152fd2d9bc7/air-force-1-07-zapatillas-XdPVhx.png', 
    category: "mujeres", title: 'Nike Air Force 1 07'},
    {id: 7, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/10da3c91-9deb-4264-ba81-1e6b7a5ccc68/air-force-1-low-retro-zapatillas-6qVDGL.png', 
    category: "niños", title: 'Nike Air Force 1 Low Retro'},
    {id: 8, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1bdeb519-146a-4f27-8247-7d3e0016d883/air-force-1-07-se-zapatillas-hzhJNW.png', 
    category: "niños", title: 'Nike Air Force 1 07 SE'},
    {id: 9, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e13c3bf5-7f52-4d89-ba6b-4152fd2d9bc7/air-force-1-07-zapatillas-XdPVhx.png', 
    category: "niños", title: 'Nike Air Force 1 07'},

];
    export const ItemDetailContainer = () => {
        const [data, setData] = useState({});
        const { detalleId } = useParams();

        useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(shoes);
                }, 1000);
        });

        getData.then(res => setData(res.find(shoe => shoe.id === parseInt(detalleId))));
       },[])


    return (
        <ItemDetail data={data} />
    );

}

export default ItemDetailContainer;