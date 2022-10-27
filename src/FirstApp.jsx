import React from 'react'
import PropTypes from 'prop-types';


const newMenssage = {
    message : 'Hola Mundo',
    title : 'Luciano'
};

// con los angulos vacios <> </> en esta posicion no tenemos que llamar un div
// Sinonimo de Fragmento 

export const FirstApp = ( {title, subtitle, name} ) => {

  return (
    <> 
        {/* <code>{JSON.stringify(newMenssage)}<code> */}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
title: 'No hay titulo',
subtitle: 'No hay subtitle',
name: 'Luciano De Souza'
}