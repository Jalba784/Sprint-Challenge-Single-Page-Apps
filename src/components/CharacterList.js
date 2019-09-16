import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js"


const CharacterList = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setCharacter(res.data.results)
        })
        .catch(err => console.log(err))
  }, [])
  console.log(character);


  return (
      <div>
        {character.map(item => {
          return <CharacterCard key={item.id} img={item.image} name={item.name} species={item.species} status={item.status} />
        })}
      </div>
  );
}

export default CharacterList;

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect
//
//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);
//
//   return (
//     <section className="character-list grid-view">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }
