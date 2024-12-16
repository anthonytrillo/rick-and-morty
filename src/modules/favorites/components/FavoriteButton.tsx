import { useFavorites } from "../hooks/useFavorites";
import { ICharacter } from "../../../interfases/character";
import styles from "./FavoriteButton.module.css";
import { useToast } from "../../../hooks/useToast";

const FavoriteButton = ({ character }: { character: ICharacter }) => {
  const { state, dispatch } = useFavorites();
  const { notifySuccess, notifyInfo } = useToast();

  const addToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: character });
    notifySuccess("Personaje agregado a favoritos.");
  };

  const removeFromFavorites = () => {
    dispatch({ type: "REMOVE_FAVORITE", payload: character });
    notifyInfo("Personaje quitado de favoritos.");
  };

  const isFavorite = state.favorites.some((fav) => fav.id === character.id);

  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
      onClick={isFavorite ? removeFromFavorites : addToFavorites}
    >
      {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
    </button>
  );
};

export default FavoriteButton;