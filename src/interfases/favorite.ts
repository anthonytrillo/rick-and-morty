import { ReactNode } from "react";
import { ICharacter } from "./character";

export interface IFavoritesState {
  favorites: ICharacter[];
};

export interface IFavoritesAction {
  type: "ADD_FAVORITE" | "REMOVE_FAVORITE";
  payload: ICharacter;
};

export interface IFavoritesProviderProps {
  children: ReactNode;
};

