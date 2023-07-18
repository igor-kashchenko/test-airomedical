import React, { useEffect } from 'react';
import { useBeersStore } from '@/store';
import { useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { BeerIngredients } from './BeerIngredients';

export const BeerDetails: React.FC = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const beers = useBeersStore((state) => state.beers);

  const foundBeer = beers.find((beer) => beer.id === +id);

  useEffect(() => {
    if (!foundBeer) {
      navigate('/');
    }
  }, [beers, foundBeer, navigate]);

  if (!foundBeer) {
    return null;
  }

  const {
    name,
    tagline,
    description,
    image_url,
    first_brewed,
    abv,
    ingredients,
    brewers_tips,
    food_pairing,
    contributed_by,
  } = foundBeer;

  const { malt, hops } = ingredients;

  return (
    <Grid container p={4}>
      <Grid item container xs={3} justifyContent={'center'}>
        <Box
          component={'img'}
          src={image_url}
          alt={`${name}'s image`}
          height={600}
        />
      </Grid>

      <Grid item xs={9}>
        <Box>
          <Typography color={'primary'} variant='h4' mb={2}>
            {name}
          </Typography>

          <Typography
            color={'primary'}
            variant='body1'
            fontStyle={'italic'}
            fontWeight={'bold'}
            mb={2}
          >
            {tagline}
          </Typography>

          <Typography color={'primary'} mb={2}>
            {description}
          </Typography>

          <Typography color={'primary'} mb={2}>
            First brewed: {first_brewed}
          </Typography>

          <Typography color={'primary'}>ABV: {abv}‰</Typography>
        </Box>

        <BeerIngredients malt={malt} hops={hops} />

        <Grid container>
          <Grid item xs={6}>
            <Typography color={'primary'} variant='h6' fontWeight={'bold'}>
              Food Pairings:
            </Typography>

            <List>
              {food_pairing.map((food) => (
                <ListItem key={food}>
                  <ListItemText
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    - {food}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={6}>
            <Typography color={'primary'} mb={4} fontStyle={'italic'}>
              {brewers_tips}
            </Typography>

            <Typography color={'primary'} variant='caption'>
              Contributed by: {contributed_by}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
