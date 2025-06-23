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


