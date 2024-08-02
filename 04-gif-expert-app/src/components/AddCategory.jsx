import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState("")

  const onInputChanged=({target})=>{
   setinputValue(target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1)return;
    onNewCategory(inputValue.trim())
    setinputValue('')
  }
  return (
    <form onSubmit={onSubmit} aria-label="form">
    <input type="text" placeholder="Buscar gi" value={inputValue} onChange={onInputChanged}/>

    </form>
  )
}


AddCategory.propTypes={
  onNewCategory: PropTypes.func.isRequired
}