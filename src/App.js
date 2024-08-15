import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  /* aQui recuperamos los datos de la api */
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
    const data = await response.json();
    setCharacters(data.results);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  /* retornamos a la vista */
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-white rounded-lg">**- Rick y Morty -**</h1>{/* título */}
        <div className="grid grid-cols-2 gap-6">
          {/* con map iteramos el array el cual trae los personajes */}
          {characters.map(character => (
            <div className="aspect-w-1 aspect-h-1">
              <CharacterCard 
                key={character.id} 
                character={character} 
                
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
}

export default App;