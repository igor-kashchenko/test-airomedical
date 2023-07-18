import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/index';
import { AppContainer } from './components/AppContainer';

export const App: React.FC = () => (
  <AppContainer>
    <RouterProvider router={router} />
  </AppContainer>
);

