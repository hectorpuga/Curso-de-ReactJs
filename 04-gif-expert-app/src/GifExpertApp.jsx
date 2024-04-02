import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball z'])
    console.log(categories);
    const onAddCategory=(newCategory)=>{

        setCategories([...categories,'naruto']);

    }
    return (
        <>
        {/**Titulo */}
            <h1>GifExpertApp</h1>
        {/**Input */}
        <AddCategory setCategories={setCategories}/>
        {/**Listado de Gif */}
        <ol>
            {
                categories.map((data)=>(<li key={data}>{data}</li>)
            )
            }
        </ol>
        {/**Gif Item */}

        </>
    )
}