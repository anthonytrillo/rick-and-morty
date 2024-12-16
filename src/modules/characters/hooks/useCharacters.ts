import { useEffect, useState } from "react";
import { fetchCharacters } from "../../../services/Characters.service";
import { IFilterState } from "../../../interfases/filters";

export const useCharacters = (currentPage: number, filters: IFilterState) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchCharacters(currentPage, filters);
        setCharacters(data.results || []);
        setTotalPages(data.info.pages || 1);
      } catch (err) {
        setError("Error al obtener los personajes.");
        setCharacters([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage, filters]);

  return { characters, loading, error, totalPages };
};