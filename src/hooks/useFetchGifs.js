import { useState, useEffect } from 'react'; 
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [state, setState] = useState({  
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifs(category) //Peticion a la API
      .then( imgs =>{
        setState({ 
          data: imgs,
          loading: false
        });          
      }) 
      .catch( error => console.log(error))
  }, [ category ]);
  
  return state; //{data: [], loading: true};
}