import { render, screen, fireEvent } from "@testing-library/react";
import FilterBar from "../components/FilterBar";
import { useFilters } from "../hooks/useFilters";

jest.mock("../hooks/useFilters");

describe("Componente FilterBar", () => {
  const mockSetFilter = jest.fn();
  const mockFilters = {
    name: "",
    status: "",
    species: "",
  };

  beforeEach(() => {
    (useFilters as jest.Mock).mockReturnValue({
      filters: mockFilters,
      setFilter: mockSetFilter,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Muestra los campos input y select", () => {
    render(<FilterBar />);

    // Verifica que los campos de filtro se renderizan correctamente
    expect(screen.getByPlaceholderText(/Buscar por nombre/i)).toBeInTheDocument();
    expect(screen.getByText(/Estados/i)).toBeInTheDocument();
    expect(screen.getByText(/Especies/i)).toBeInTheDocument();
  });

  test("Llama a setFilter cuando cambia el nombre de la entrada", () => {
    render(<FilterBar />);
    const nameInput = screen.getByPlaceholderText(/Buscar por nombre/i);

    // Simula cambio en el input de nombre
    fireEvent.change(nameInput, { target: { value: "Rick" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("name", "Rick");
  });

  test("Llama a setFilter cuando cambia el select de estados", () => {
    render(<FilterBar />);
    const statusSelect = screen.getByText(/Estados/i).closest("select");

    // Simula selección de opción en el campo `status`
    fireEvent.change(statusSelect!, { target: { value: "Alive" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("status", "Alive");
  });

  test("Llama a setFilters cuando cambia el select de especies", () => {
    render(<FilterBar />);
    const speciesSelect = screen.getByText(/Especies/i).closest("select");

    // Simular selección de opción en el campo `species`
    fireEvent.change(speciesSelect!, { target: { value: "Human" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("species", "Human");
  });

  test("Muestra los valores iniciales correctos", () => {
    render(<FilterBar />);

    // Verifica que los valores iniciales sean los definidos en `mockFilters`
    expect(screen.getByPlaceholderText(/Buscar por nombre/i)).toHaveValue("");
    expect(screen.getByText(/Estados/i).closest("select")).toHaveValue("");
    expect(screen.getByText(/Especies/i).closest("select")).toHaveValue("");
  });
});
