import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Componente App', () => {
  it('Muestra la página NotFound para una ruta no definida', () => {
    render(
      <MemoryRouter initialEntries={['/undefined-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});