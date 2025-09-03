import React from "react";
import styles from "../../components/cardfilme/cardfilme.module.css"

export default function CardFilme({titulo,imagem,descricao}){
    return(
        <>
        <div>
            <img src={imagem} alt={titulo} />
             <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
        </>
    )
}