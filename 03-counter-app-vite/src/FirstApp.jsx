import PropTypes from 'prop-types';

const getSaludo=(name)=>`Hola ${name}`;

const newMessage = {
    message: 'Hola mundo',
    title: 'Fernando'
};

// Fragment, se utiliza para agrupar multiples etiquetas de html, sin necesidad de agrgar un div para agrupar y agrega dicho componente inecesario

// Se puede utilizar de dos formas, con la etiqueta <Fragment></Fragment>, pero necesitas importar "import {Fragment} from 'react", o se puede utiliza simplemente poniendo "<>componentes</>", sin necesidad de importar el fragmento, se hace automaticamente, 
// Es mejor utilzar la segunda opción ya que es mas comun y elegante, se muestra la anterior por que en algunos proyecto se pueden llegar a utilizar a asi
// adentro de un una etiqueta para renderizar los objetos no son permitos para renderizar en react
export const FirsApp = ({title,subtitle,name}) => {

    // console.log(props);
    return (<>
{/*si queremos rendirizar la información de un objeto, se puede hacer convirtiendo el objeto a un json string con el metodo que se muestra en la siguiente linea.*/}
        {/* <code>{JSON.stringify(newMessage)}</code> */} 
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>);
}

FirsApp.propTypes={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirsApp.defaultProps={
    title:'No hay titulo',
    subtitle:'No hay subtitule',
    name:'Hector Puga'
}