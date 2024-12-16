import styles from "./FilterBar.module.css";
import { useFilters } from "../hooks/useFilters";

const FilterBar = () => {
  const { filters, setFilter } = useFilters();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilter(e.target.name as keyof typeof filters, e.target.value);
  };

  return (
    <section className={styles.filtersSection}>
      <div className={styles.filterSearch}>
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filters}>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">Estados</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>

        <select
          name="species"
          value={filters.species}
          onChange={handleInputChange}
        >
          <option value="">Especies</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
          <option value="Animal">Animal</option>
          <option value="Robot">Robot</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
    </section>
  );
};

export default FilterBar;
