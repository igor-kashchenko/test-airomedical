import React from 'react';
import { BeersList } from '@/components/BeersList';
import { Header } from '@/components/Header';

export const HomePage: React.FC = () => (
  <>
    <Header title='Beer Recipes' />

    <BeersList />
  </>
);

