import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import { IPaginationProps } from "../../interfases/pagination";

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
    render(<Pagination {...defaultProps} />);

    const pageInfo = screen.getByText(/página 1 de 5/i);
    expect(pageInfo).toBeInTheDocument();
  });

  test("Muestra los botones con el estado inicial correcto", () => {
    render(<Pagination {...defaultProps} />);

    const previousButton = screen.getByRole("button", { name: /anterior/i });
    const nextButton = screen.getByRole("button", { name: /siguiente/i });

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Siguiente'", () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByRole("button", { name: /siguiente/i });
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page + 1
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Anterior'", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const previousButton = screen.getByRole("button", { name: /anterior/i });
    fireEvent.click(previousButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page - 1
  });

  test("Desactiva el botón 'Siguiente' cuando está en la última página", () => {
    render(<Pagination {...defaultProps} currentPage={5} />);

    const nextButton = screen.getByRole("button", { name: /siguiente/i });
    expect(nextButton).toBeDisabled();
  });

  test("Desactiva el botón 'Anterior' cuando está en la primera página", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);

    const previousButton = screen.getByRole("button", { name: /anterior/i });
    expect(previousButton).toBeDisabled();
  });

  test("Muestra ambos botones habilitados para las páginas centrales", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const previousButton = screen.getByRole("button", { name: /anterior/i });
    const nextButton = screen.getByRole("button", { name: /siguiente/i });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});