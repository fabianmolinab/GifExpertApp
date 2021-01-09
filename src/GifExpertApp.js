import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaulCategories = [] }) => {

  const [categorias, setCategories] = useState(defaulCategories);

  return (
    <>
      <h2>¡Puedes buscar cualquier Gif!</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categorias.map(category =>
            <GifGrid
              category={category}
              key={category}
            />
          )
        }
      </ol>
    </>
  )
};