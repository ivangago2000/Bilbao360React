// services/lugarFilters.js
export function filterLugarByTipo(lugares, tipo) {
  return lugares.filter(lugar => lugar.tipo === tipo);
}
