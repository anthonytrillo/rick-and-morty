import { Link } from "react-router-dom";
import { ICharacter } from "../../../interfases/character";
import styles from "./CharacterCard.module.css";
import FavoriteButton from "../../favorites/components/FavoriteButton";

const CharacterCard = ({ character }: { character: ICharacter }) => {
  return (
    <article key={character.id} className={styles.charactersItem}>
      <Link to={`/character/${character.id}`}>
        <img src={character?.image} alt={character.name} />
        <h2>Nombre: {character.name}</h2>
        <h2>Estado: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
      </Link>
      <FavoriteButton character={character}/>
    </article>
  );
};

export default CharacterCard;