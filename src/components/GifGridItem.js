import React from 'react';

export const GifGridItem = ({title, id, url}) => {

  return <div className='card animate__animated animate__bounce animate__fadeInDown'> 
            <p>{ title }</p>  
            <img src={url} alt={title} /> 
         </div>;
};
