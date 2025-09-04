import CardFilme from "../cardfilme/cardfilme";
import styles from "../../components/listaFilmes/listafilmes.module.css"


export default function listafilmes({ filmes }) {
  return filmes.length ? (
    <ul className={styles.lista}>
      {filmes.map((filme) => (
        <CardFilme
          key={filme.id}
          titulo={filme.titulo}
          imagem={filme.imagem}
          descricao={filme.descricao}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.vazio}>Nenhum filme cadastrado.</p>
  );
}
  
  
  
  
  
  