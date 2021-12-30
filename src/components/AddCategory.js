import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ addCategory }) => {
  const [category, setCategory] = useState('');
  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (category.trim().length > 2) {
      addCategory(category);
      setCategory('');
    }
    //Otra forma de hacerlo utilizando directamente el set del State de GifExpertApp
    // setCategories(estadoAnterior=>[...estadoAnterior, category])
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={category} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
