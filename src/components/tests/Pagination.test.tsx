import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import { IPaginationProps } from "../../interfases/pagination";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";

describe("Componente Pagination", () => {
  const mockOnPageChange = jest.fn();

  const defaultProps: IPaginationProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: mockOnPageChange,
  };

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test("Muestra la información correcta de la página", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const pageInfo = screen.getByText(/page 1 of 5/i);
    expect(pageInfo).toBeInTheDocument();
  });

  test("Muestra los botones con el estado inicial correcto", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Siguiente'", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page + 1
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Anterior'", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} currentPage={3} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(previousButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page - 1
  });

  test("Desactiva el botón 'Siguiente' cuando está en la última página", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} currentPage={5} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test("Desactiva el botón 'Anterior' cuando está en la primera página", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} currentPage={1} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    expect(previousButton).toBeDisabled();
  });

  test("Muestra ambos botones habilitados para las páginas centrales", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Pagination {...defaultProps} currentPage={3} />
        </MemoryRouter>
      </LanguageProvider>
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});