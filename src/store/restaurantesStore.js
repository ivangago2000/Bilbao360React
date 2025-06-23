import { create } from 'zustand';

export const useRestaurantesStore = create(set => ({
  restaurantes: [],
  setRestaurantes: (data) => set({ restaurantes: data }),
  // ...otras funciones
}));