import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 2,
        boxSizing: 'border-box',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
