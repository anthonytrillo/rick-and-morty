import { useCharacterDetails } from "../hooks/useCharacterDetails";
import styles from "./CharacterDetails.module.css";

const CharacterDetails = () => {
  const { character, loading, error } = useCharacterDetails();

  if (loading) return <p>Cargando detalles del personaje...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.charactersInner}>
      <article className={styles.charactersCard}>
        <img src={character?.image} alt={character?.name} />
        <h2>{character?.name}</h2>
      </article>
      <article className={styles.charactersCard}>
        <h3>
          Episodios: <span>{character?.episode.length}</span>
        </h3>
        <h3>
          Estado: <span>{character?.status}</span>
        </h3>
        <h3>
          Especie: <span>{character?.species}</span>
        </h3>
        <h3>
          Género: <span>{character?.gender}</span>
        </h3>
        <h3>
          Origen: <span>{character?.origin.name}</span>
        </h3>
        <h3>Última ubicación: {character?.location.name}</h3>
      </article>
    </div>
  );
};

export default CharacterDetails;