import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from '@/App.tsx';
import { FavoritesProvider } from '@/modules/favorites/context/FavoritesContext';
import { FilterProvider } from '@/modules/characters/context/FilterContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <FavoritesProvider>
          <App />
          <ToastContainer />
        </FavoritesProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>,
)