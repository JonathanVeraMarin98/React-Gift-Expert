import { useState } from "react"
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({target}) => {
    setinputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    // IF retorna si categoria no tiene mas de 2 caracteres
    if(inputValue.trim().length <=1) return;

    setinputValue('');
    onNewCategory( inputValue);
   
    
  }

  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange }
    
    />
    </form>
  )
}

export default AddCategory