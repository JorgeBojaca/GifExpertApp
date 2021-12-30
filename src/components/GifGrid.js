import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      {loading && 'Cargando...'}
      <div className="gif-grid-container">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
export default GifGrid;
