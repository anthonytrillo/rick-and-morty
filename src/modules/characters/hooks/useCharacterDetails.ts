import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../../../services/Characters.service';
import { ICharacterDetails } from '../../../interfases/character';

export const useCharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharacterDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterById(Number(id));
        setCharacter(data);
      } catch (err) {
        setError('Error al obtener los detalles del personaje.');
      } finally {
        setLoading(false);
      }
    };

    getCharacter();
  }, [id]);

  return { character, loading, error };
};