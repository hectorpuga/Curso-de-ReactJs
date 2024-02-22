
const personajes=['Goku','Vegeta','Trunks'];

const [,,p3]=personajes;

console.log(p3);



const retornarArreglo=()=>{

    return ['ABC',123];
}


const [letras,numeros]=retornarArreglo();


console.log(letras,numeros);

// Tarea
// 1. el primer valor del arr se llmará nombre
// 2. se llamará setNombre
const useState=(valor)=>{
    return [valor,()=>{console.log('Hola Mundo');}];
}

const [nombre,setNombre]= useState('Goku');


console.log(nombre);

setNombre();