import { useState, useEffect } from "react";
import { useCharacters } from "@/modules/characters/hooks/useCharacters";
import { useFilters } from "@/modules/characters/hooks/useFilters";
import styles from "./Characters.module.css";
import CharacterCard from "@/modules/characters/components/CharacterCard";
import Pagination from "@/components/Pagination";

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filters } = useFilters();
  const { characters, loading, error, totalPages } = useCharacters(currentPage, filters);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  if (!loading && characters.length === 0) {
    return <p>No se encontraron personajes con los filtros seleccionados.</p>;
  };

  return (
    <>
      <main className={styles.characters}>
        {characters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </main>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Characters;