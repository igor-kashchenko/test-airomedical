import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  title: string,
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Box sx={{
      borderRadius: '8px 8px 0 0',
      backgroundColor: '#4c4c6d',
    }}>
      <Typography variant='h2' textAlign={'center'} color={'#fff'}>
        {title}
      </Typography>
    </Box>
  );
};
