import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { SecondApp } from './SecondApp';


import './styles.css'; /* Hay que importar los estilos con el nombre que se creo */


ReactDOM.createRoot( document.getElementById('root') ).render(
    
<React.StrictMode>
    <CounterApp luciano={20} pepito={40} /> 
    <CounterApp luciano={20} pepito={40} /> 
</React.StrictMode>
);






