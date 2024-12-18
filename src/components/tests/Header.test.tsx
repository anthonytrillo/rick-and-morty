import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "../Header";

describe("Componente Header", () => {
  test("Devuelve el título principal con el nombre correcto", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </LanguageProvider>
    );

    // Verifica que el título principal este presente
    const titleElement = screen.getByRole("heading", { level: 1, name: /rick and morty/i });
    expect(titleElement).toBeInTheDocument();

    // Verifica que el enlace al inicio este presente
    const homeLink = screen.getByRole("link", { name: /rick and morty/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("Devuelve el enlace a favoritos", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </LanguageProvider>
    );

    // Verifica que el enlace a favoritos este presente
    const favoritesLink = screen.getByRole("link", { name: /favorites/i });
    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
  });
});
