import React from 'react';
import CategoryItem from '../CategoryItem';
import { categories } from '../../../public/data';

const Shop = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-5xl font-bold mb-10 mt-20 text-center">Our Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            name={category.name}
            image={category.Image}
            route={category.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
