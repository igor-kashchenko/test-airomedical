import React from 'react';
import { Link } from 'react-router-dom';
import { BeerDetails } from '@/components/BeerDetails';
import { Header } from '@/components/Header';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BeerDetailsPage: React.FC = () => (
  <>
    <Header title='Beer Details' />

    <Box px={4} pt={4}>
      <Link to={'/'}>
        <ArrowBackIcon sx={{
          cursor: 'pointer',
          transition: 'color 0.3s linear',
          color: '#6b6b9c',
          ':hover': {
            color: '#55557d',
          },
          ':active': {
            color: '#4c4c6d'
          },
        }}/>
      </Link>
    </Box>

    <BeerDetails />
  </>
);

