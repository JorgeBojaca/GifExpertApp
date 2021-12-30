import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  const addCategory = (cat) => {
    setCategories([cat, ...categories]);
  };
  return (
    <>
      <header>
        <h2>GifExpertApp</h2>
        <AddCategory addCategory={addCategory} />
        <hr />
      </header>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
