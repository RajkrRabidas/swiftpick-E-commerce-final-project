import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ name, image, route }) => {
  return (
    <div className="category bg-white shadow rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 p-4 text-center">
      <Link to={`/category/${route}`} className="block">
        <div className="w-full h-32 flex items-center justify-center overflow-hidden mb-4">
          <img src={image} alt={name} className="object-contain h-full w-full rounded" />
        </div>
        <p className="text-2xl font-semibold">{name}</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
