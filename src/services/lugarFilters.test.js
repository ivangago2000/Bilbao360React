import { filterLugarByTipo } from './lugarFilters';

describe('filterLugarByTipo', () => {
  const lugares = [
    { nombre: 'Museo Guggenheim', tipo: 'museos' },
    { nombre: 'Parque Europa', tipo: 'parques' },
    { nombre: 'Museo Bellas Artes', tipo: 'museos' },
  ];

  it('devuelve solo los lugares del tipo indicado', () => {
    const resultado = filterLugarByTipo(lugares, 'museos');
    expect(resultado).toEqual([
      { nombre: 'Museo Guggenheim', tipo: 'museos' },
      { nombre: 'Museo Bellas Artes', tipo: 'museos' },
    ]);
  });

  it('devuelve un array vacío si no hay coincidencias', () => {
    const resultado = filterLugarByTipo(lugares, 'playas');
    expect(resultado).toEqual([]);
  });
});
