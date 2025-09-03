import { useState, useEffect } from "react";
import styles from "../../components/formularioFilme/formulario.module.css";

export default function FormularioFilme({ adicionarfilme }) {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
   function handleSubmit(e) {
        e.preventDefault();
        if (!titulo || !imagem || !descricao) {
            return
        }

        else {
            adicionarfilme({ id: Date.now(), titulo,imagem,descricao });
        }
        setTitulo("");
        setImagem("");
        setDescricao("");
    }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="titulo"
          placeholder="Digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className={styles.input}
        />
        <input
          type="img"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className={styles.input}
        />
        <input
          type="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className={styles.input}
        />
         <button type="submit" className={styles.button}>
                    {"Cadastrar"}
                </button>
      </form>
    </>
  );
}
