import { BeerRecipe } from '@/types/BeerRecipe';
import { InitialState } from '@/types/initialState';
import {create } from 'zustand';

export const useBeersStore = create<InitialState>()((set) => ({
  beers: [],
  selectedBeers: [],
  fetchBeers: async (page): Promise<BeerRecipe[]> => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);

      const data = await response.json() as BeerRecipe[];

      set(() => ({beers: data}));

      return data;
    } catch(error) {
      console.error(error);

      return [];
    }
  },
  deleteBeers: (selectedBeers: string[]) => {
    set((state) => {
      return {
        beers: state.beers.filter((beer) => !selectedBeers.includes(beer.name))
      };
    });
  },
}));
