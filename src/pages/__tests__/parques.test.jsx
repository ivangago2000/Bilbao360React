import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Parques from '../parques';

// Este test comprueba que se renderizan todas las imágenes de los parques

describe('Parques', () => {
  it('muestra todas las imágenes de los parques', () => {
    render(<Parques />);
    // Lista de los alt esperados (uno por cada parque)
    const alts = [
      'Doña Casilda',
      'Artxanda',
      'Etxebarria',
      'Europa',
      'Munoa',
      'Montefuerte',
      'Mendikosolo',
      'La Muera',
      'Pinar Gorliz',
      'Akarlanda',
      'Pueblos de Europa',
      'Vivero',
    ];
    alts.forEach(alt => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
