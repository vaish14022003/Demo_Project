import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import RestaurantCard from './RestaurantCard';
const RestaurantTabs = lazy(() => import('./RestaurantTabs'));
const RestaurantHighlights = lazy(() => import('./RestaurantHighlights'));
const Footer = lazy(() => import('./Footer'));
import { restaurant } from './restaurantData'; 
import FoodLoader from './FoodLoader';

const MainPage: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-12">
        <Navbar />
        <RestaurantCard />
        
        <Suspense fallback={<FoodLoader/>}>
          <RestaurantTabs />
          <RestaurantHighlights features={restaurant.features} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
