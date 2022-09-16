import { useState} from 'react';

const PokemonCard = ({name, url}) => {
  const [image, setImage] = useState("https://via.placeholder.com/100x100");

  fetch(url).then(response => {
    response.json().then(pokemonData => {
      console.log(pokemonData);
      setImage(pokemonData.sprites.other['official-artwork'].front_default);
    })
  })

  return (
    <div className="flex items-center h-40 p-8 w-60 bg-slate-100 rounded-xl dark:bg-slate-800">
      {name}
      <img className='p-5' src={image} alt={name} />
    </div>
  )
};

export default PokemonCard;