const nombre = 'Hector';
const apellido = 'Puga';

// const nombreCompleto=nombre+' '+apellido;

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
function getSaludo(name) {

    return `Hola ${name}`;

}

console.log(`Este es un texto :${getSaludo(nombreCompleto)}`);