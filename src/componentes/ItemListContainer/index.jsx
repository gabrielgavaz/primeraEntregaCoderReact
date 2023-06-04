// import { ItemCount } from "../ItemCount/Index";
import React from "react";
import Title from '../Title';


export const ItemListContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades`);
    }

    return(
        <>
        <Title texto='dou' />
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
        </>
    );
}

export default ItemListContainer;