import { describe, it, expect, vi } from 'vitest';
import { limpiarMapa, optimizarItinerario } from '../itinerario';

describe('limpiarMapa', () => {
  it('elimina todos los marcadores del mapa y vacía el array', () => {
    // Mocks de refs
    const mapaRef = { current: { removeLayer: vi.fn() } };
    const markersRef = { current: [{ id: 1 }, { id: 2 }, { id: 3 }] };

    limpiarMapa(markersRef, mapaRef);

    expect(mapaRef.current.removeLayer).toHaveBeenCalledTimes(3);
    expect(markersRef.current).toEqual([]);
  });
});

describe('optimizarItinerario', () => {
  it('ordena los lugares de menor a mayor latitud', () => {
    const lugares = [
      { nombre: 'A', lat: 43.3 },
      { nombre: 'B', lat: 43.1 },
      { nombre: 'C', lat: 43.2 }
    ];
    const resultado = optimizarItinerario([...lugares]);
    expect(resultado.map(l => l.nombre)).toEqual(['B', 'C', 'A']);
  });

  it('devuelve array vacío si se le pasa uno vacío', () => {
    expect(optimizarItinerario([])).toEqual([]);
  });
});
