import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
  const [categorias, setCategories] = useState([]);

  return ( 
    <>
      <h2>GifExpertApp</h2> 
      <AddCategory setCategories={ setCategories }/>
      <hr/>

      <ol>
        {
          categorias.map( category => 
            <GifGrid 
              category={ category }
              key={ category }
            />
          )
        }
      </ol>
    </>
  )
};