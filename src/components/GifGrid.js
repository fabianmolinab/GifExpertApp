import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGidItem } from './GifGidItem';


export const GifGrid = ({ category }) => {

  
  const {data:images, loading} = useFetchGifs( category ); // Llamado a la API  

  return (
    <>
      <h3> {category} </h3>

      { loading && <p>Cargando</p> } 

      <div className="card-grid">  
        {
          images.map( img => (
            <GifGidItem 
              key= { img } 
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
};