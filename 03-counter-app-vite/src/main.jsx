import React from 'react';  // Se importa la libreria de react para utilizarla
import ReactDOM from 'react-dom/client'; // Se importa esta libreria, para manejar o manipular el dom
// import {App} from './HelloWorldApp'
import { FirsApp } from './FirstApp'; // Importacion del archivo o componente externo
import './styles.css' // Forma de importar estilos globales en react
import { CounterApp } from './CounterApp';





// Metodo de reactdom para crear componente, necesitamos el componente de html donde se renderizara el componente
ReactDOM.createRoot(document.getElementById('root')).render( // Función necesaria para renderizar componentes de react en html
    <React.StrictMode>

        {/* <App/> 
    // Se renderiza nuestro componente (Función) y se le llama entre flechas a la función como se muestra en dicha linea
    */}
        {/* <FirsApp title={'Hola, Soy Goku'} subtitle={123} /> */}
        <CounterApp  value={1}/>
    </React.StrictMode>   // Activa el modo estricto, para evaluar el codigo y decirnos los erroes que existen
)

// FirsApp <h1> Hector</h1>