import React from 'react';
import { Link } from 'react-router-dom';
import { BeerRecipe } from '@/types/BeerRecipe';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

type Props = {
  beerRecipe: BeerRecipe;
  handleSelectBeers: (name: string) => void;
  selectedBeers: string[];
  index: number;
};

export const BeerRecipeItem: React.FC<Props> = ({
  beerRecipe,
  handleSelectBeers,
  selectedBeers,
  index,
}) => {
  const { id, name, tagline, description, image_url } = beerRecipe;

  const isSelected = selectedBeers.includes(name);

  return (
    <Link to={`/beer/${id}`} style={{ textDecoration: 'none', width: '100%' }}>
      <Paper
        elevation={isSelected ? 10 : 5}
        sx={{
          height: '200px',
          p: 2,
          boxSizing: 'border-box',
          border: '2px solid transparent',
          borderColor: isSelected ? '#4c4c6d' : 'transparent',
          cursor: 'pointer',
          ':hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
          },
          ':active': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)',
          },
        }}
        onContextMenu={() => handleSelectBeers(name)}
      >
        <Grid container height={'100%'}>
          <Grid
            item
            xs={2}
            container
            pr={2}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
          >
            <Box display={'flex'} justifyContent={'center'} mr={4}>
              <Typography variant='body2' color={'primary'} mr={2}>
                {index + 1}
              </Typography>

              <Typography variant='body2' color={'primary'} fontWeight={'bold'}>
                Beer id: {id}
              </Typography>
            </Box>

            <Box
              component={'img'}
              src={image_url}
              alt={`${name}'s image`}
              height={150}
            />
          </Grid>

          <Grid item xs={10}>
            <Typography variant='h5' color={'primary'} mb={2}>
              {name}
            </Typography>

            <Typography
              variant='body1'
              fontStyle={'italic'}
              fontWeight={'bold'}
              color={'primary'}
              mb={2}
            >
              {tagline}
            </Typography>

            <Typography
              variant='caption'
              color='primary'
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};
