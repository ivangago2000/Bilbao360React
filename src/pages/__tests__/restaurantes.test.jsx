import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Restaurantes from '../restaurantes';

describe('Restaurantes', () => {
  it('muestra el título de un restaurante', () => {
    render(<Restaurantes />);
    expect(screen.getByText(/Restaurante Nerua/i)).toBeInTheDocument();
  });
});