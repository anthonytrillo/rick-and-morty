import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";
import { ICharacter } from "../../../interfases/character";
import { FavoritesProvider } from "../../favorites/context/FavoritesContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { MemoryRouter } from "react-router-dom";

const mockCharacter: ICharacter = {
  id: 10,
  name: "Alan Rails",
  status: "Dead",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
};

describe("Componente CharacterCard", () => {
  test("Muestra la card de cada personaje correctamente", () => {
    render(
      <LanguageProvider>
        <FavoritesProvider>
          <MemoryRouter>
            <CharacterCard character={mockCharacter} />
          </MemoryRouter>
        </FavoritesProvider>
      </LanguageProvider>
    );

    expect(screen.getByText(/Alan Rails/i)).toBeInTheDocument();
    expect(screen.getByText(/Dead/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Alan Rails/i)).toHaveAttribute("src", "https://rickandmortyapi.com/api/character/avatar/10.jpeg");
  });
});