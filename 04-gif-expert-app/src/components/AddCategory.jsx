import { useState } from "react"



export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState("One punch")

  const onInputChanged=({target})=>{
   setinputValue(target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1)return;
    setCategories((categorias)=>[...categorias,inputValue])
    console.log('me ejectue');
    setinputValue('')
  }
  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholde="Buscar gi" value={inputValue} onChange={onInputChanged}/>

    </form>
  )
}
