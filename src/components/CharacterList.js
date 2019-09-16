import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js"
import { Link } from "react-router-dom";
import styled from "styled-components"

const HomeLink = styled.h3`
  text-align: center;
  padding: 20px;
`;


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
        <HomeLink>
          <Link to="/">Home</Link>
        </HomeLink>
        <div className="cards">
          {character.map(item => {
            return <CharacterCard  key={item.id} img={item.image} name={item.name} species={item.species} status={item.status} />
          })}
        </div>
        <HomeLink>
          <Link to="/">Home</Link>
        </HomeLink>
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
