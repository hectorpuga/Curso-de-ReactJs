import { GifItem } from "./GitItem";
import {useFetchGifs} from '../hooks/useFetchGifs';
import PropType from 'prop-types';
export const GifGrid = ({ category }) => {
  
  const {images,isLoading}=useFetchGifs(category);
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading?<h2>Cargando...</h2>:

    <div className="card-grid">
  {
    images.map((image)=>(<GifItem key={image.id}{ ...image }/>))
  }
      
    </div>

    }
  </>
  );
};


GifGrid.propTypes={
category:PropType.string.isRequired
}