import React from 'react'
import CarouselMain from './CarouselMain';
import ShoppingList from './ShoppingList';
import Subscribe from './Subscribe';

const Home = () => {
  return (
    <div className="Home">
      <CarouselMain />
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home