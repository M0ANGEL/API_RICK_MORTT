import React from 'react';

function CharacterModal({ character, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-8 max-w-sm w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center mb-4">
          <img 
            src={character.image} 
            alt={character.name} 
            className="w-24 h-24 rounded-lg object-cover mr-4"
          />
          <h2 className="text-xl font-bold">{character.name}</h2>
        </div>
        <div className="text-sm">
          <p className="mb-1 text-red-800"><span className="font-semibold"><b>Especie:</b></span> {character.species}</p>
          <p className="mb-1 text-red-800"><span className="font-semibold"><b>Estado:</b></span> {character.status}</p>
          <p className="mb-1 text-red-800"><span className="font-semibold"><b>Género:</b></span> {character.gender}</p>
          <p className="mb-1 text-red-800"><span className="font-semibold"><b>Origen:</b></span> {character.origin.name}</p>
          <p className="mb-1 text-red-800"><span className="font-semibold"><b>Ubicación:</b></span> {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;