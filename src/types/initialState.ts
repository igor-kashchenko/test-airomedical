import { BeerRecipe } from './BeerRecipe';

export type InitialState = {
  beers: BeerRecipe[],
  selectedBeers: string[],
  fetchBeers: (page: number) => Promise<BeerRecipe[]>,
  deleteBeers: (selectedBeers: string[]) => void,
  setSelectedBeers: (name: string) => void,
}
