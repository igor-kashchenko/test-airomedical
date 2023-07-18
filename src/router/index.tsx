import { BeerDetailsPage } from '@/modules/BeerDetailsPage';
import { HomePage } from '@/modules/HomePage';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/beer/:id',
    element: <BeerDetailsPage />,
  }
]);
