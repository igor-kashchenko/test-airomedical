import React, { useEffect, useState, useRef } from 'react';
import { useBeersStore } from '@/store';
import { BeerRecipeItem } from './BeerRecipeItem';
import Grid from '@mui/material/Grid';
import { BeerRecipe } from '@/types/BeerRecipe';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export const BeersList: React.FC = () => {
  const beers = useBeersStore((state) => state.beers);
  const fetchBeersRecipes = useBeersStore((state) => state.fetchBeers);
  const deleteBeers = useBeersStore((state) => state.deleteBeers);
  const selectedBeers = useBeersStore((state) => state.selectedBeers);
  const setSelectedBeers = useBeersStore((state) => state.setSelectedBeers);

  const [renderedBeers, setRenderedBeers] = useState<BeerRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFetched, setHasFetched] = useState(false);

  const beersAreSelected = selectedBeers.length > 0;
  const oneBeerIsSelected = selectedBeers.length === 1;

  const beerListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBeersFetch = async (page: number) => {
      await fetchBeersRecipes(page);
      setHasFetched(true);
    };

    void handleBeersFetch(currentPage);
  }, [fetchBeersRecipes, currentPage]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const currentRef = beerListRef.current;

    if (currentRef) {
      currentRef.addEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('contextmenu', handleContextMenu);
      }
    };
  }, []);

  useEffect(() => {
    if (beers.length === 0 && hasFetched) {
      if (currentPage === 13) {
        setCurrentPage(1);
      } else {
        setCurrentPage((prev) => prev + 1);
      }
    }
  }, [beers, hasFetched]);

  useEffect(() => {
    setRenderedBeers(beers.slice(0, 15));
  }, [beers]);


  const handleDeleteBeers = () => {
    deleteBeers(selectedBeers);
  };

  return (
    <Grid p={4} container rowGap={2} ref={beerListRef} position={'relative'}>
      {renderedBeers.map((beer, i) => (
        <BeerRecipeItem
          key={beer.id}
          beerRecipe={beer}
          handleSelectBeers={setSelectedBeers}
          selectedBeers={selectedBeers}
          index={i}
        />
      ))}

      {beersAreSelected && (
        <Box
          sx={{
            position: 'fixed',
            right: '1%',
            top: '50%',
          }}
        >
          <Typography textAlign={'center'} mb={1}>
            {selectedBeers.length} selected
          </Typography>

          <Button variant='contained' onClick={() => handleDeleteBeers()}>
            {oneBeerIsSelected ? 'Delete beer' : 'Delete beers'}
          </Button>
        </Box>
      )}
    </Grid>
  );
};
