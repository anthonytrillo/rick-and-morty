import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";
import { useToast } from "../../../hooks/useToast";
import { ICharacter } from "../../../interfases/character";

jest.mock("../hooks/useFavorites");
jest.mock("../../../hooks/useToast");

describe("Componente FavoriteButton", () => {
  const mockCharacter: ICharacter = {
    id: 11,
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  };

  const mockDispatch = jest.fn();
  const mockNotifySuccess = jest.fn();
  const mockNotifyInfo = jest.fn();

  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [] },
      dispatch: mockDispatch,
    });

    (useToast as jest.Mock).mockReturnValue({
      notifySuccess: mockNotifySuccess,
      notifyInfo: mockNotifyInfo,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Muestra el botón con el texto 'Agregar a favoritos' cuando el personaje no es un favorito", () => {
    render(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Agregar a favoritos/i });
    expect(button).toBeInTheDocument();
  });

  test("Muestra el botón con el texto 'Eliminar de favoritos' cuando el personaje es un favorito", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [mockCharacter] },
      dispatch: mockDispatch,
    });

    render(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Eliminar de favoritos/i });
    expect(button).toBeInTheDocument();
  });

  test("Llama a dispatch y notifySuccess al añadir a favoritos", () => {
    render(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Agregar a favoritos/i });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_FAVORITE",
      payload: mockCharacter,
    });
    expect(mockNotifySuccess).toHaveBeenCalledWith("Personaje agregado a favoritos.");
  });

  test("Llama a dispatch y notifyInfo cuando se elimina de favoritos", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [mockCharacter] },
      dispatch: mockDispatch,
    });

    render(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Eliminar de favoritos/i });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_FAVORITE",
      payload: mockCharacter,
    });
    expect(mockNotifyInfo).toHaveBeenCalledWith("Personaje quitado de favoritos.");
  });
});