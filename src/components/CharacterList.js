import React from "react";
import CharacterCard from "./CharacterCard.js"
import { Link } from "react-router-dom";
import styled from "styled-components"

const HomeLink = styled.h3`
  text-align: center;
  padding: 20px;
`;

const CharacterList = (props) => {
  return (
      <div>
        <HomeLink>
          <Link to="/">Home</Link>
        </HomeLink>
        <div className="cards">
          {props.character.map(item => {
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