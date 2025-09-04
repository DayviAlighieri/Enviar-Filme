import React from "react";
import styles from "../../components/cardfilme/cardfilme.module.css";

export default function CardFilme({ titulo, imagem, descricao }) {
  return (
    <>
      <div>
        <h2>{titulo}</h2>
        <img src={imagem} alt={titulo} />
        <p>{descricao}</p>
      </div>
    </>
  );
}
