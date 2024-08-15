import React from 'react';

function CharacterCard({ character, onClick }) {
  // Estilos en línea para el div y el texto
  const divStyle = {
    display: 'flex',          // Usar flexbox para alinear los elementos
    alignItems: 'center',     // Alinear verticalmente al centro
    padding: '10px',          // Espaciado interno
    borderRadius: '8px',      // Bordes redondeados
    backgroundColor: 'white', // Fondo blanco
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
    cursor: 'pointer',        // Cursor en forma de mano
    transition: 'transform 0.3s', // Transición de transformación
  };

  const imgStyle = {
    width: '100px',           // Ancho fijo para la imagen
    height: '100px',          // Alto fijo para la imagen
    objectFit: 'cover',       // Ajuste de la imagen para cubrir el área
    marginRight: '10px',      // Espacio entre imagen y texto
    borderRadius: '8px',      // Bordes redondeados en la imagen
  };

  const texto = {
    flex: 1,                  // Permitir que el texto ocupe el espacio restante
  };

  return (
    <div
      style={divStyle}
      className="transform transition-transform duration-300 hover:scale-105 ml-4 mr-4 mb-4"
      onClick={onClick}
    >
      <img
        src={character.image}
        alt={character.name}
        style={imgStyle} // Aplicar estilo en línea para la imagen
      />
      <div style={texto}>
        <h3 className="text-xl font-semibold text-gray-800"><b>{character.name}</b></h3>
      </div>
    </div>
  );
}

/* exportamos  */
export default CharacterCard;