import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  // Cada vez que escriba
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // Cuando haces ENTER
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el refrescar de la pagina

    // Validación del campo de busqueda
    if (inputValue.trim().length >= 2) {

      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p> {inputValue} </p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
};
AddCategory.propTypes = {

  setCategories: PropTypes.func.isRequired

};