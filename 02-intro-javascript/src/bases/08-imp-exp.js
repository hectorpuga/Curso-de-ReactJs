// import {heroes} from './data/heroes';

import  heroes from "../data/heroes";

// console.log(owners);
export const getHeroeById=(id)=> heroes.find((element)=>element.id===id);

// const getHeroesByOwner=(owner)=> heroes.filter((heroe)=>heroe.owner===owner);

// console.log(getHeroeById(1));
// find?, filter
// console.log(getHeroesByOwner('DC'));