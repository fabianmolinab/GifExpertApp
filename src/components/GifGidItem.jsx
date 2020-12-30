import React from 'react'

export const GifGidItem = ({title,url}) => {
  return (
    <div className="card animate__animated animate__wobble">
      
      <img 
        src={url} 
        alt={title}
      />
    </div>
  )
}

