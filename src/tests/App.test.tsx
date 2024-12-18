import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { LanguageProvider } from '@/context/LanguageContext';

describe('Componente App', () => {
  it('Muestra la página NotFound para una ruta no definida', () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/undefined-route']}>
          <App />
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});