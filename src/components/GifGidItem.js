import React from 'react';
import PropTypes from 'prop-types';

export const GifGidItem = ({title,url}) => {
  return (
    <div className="card animate__animated animate__wobble">
      
      <img 
        src={url} 
        alt={title}
      />
    </div>
  )
};

GifGidItem.propTypes = {

  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}

