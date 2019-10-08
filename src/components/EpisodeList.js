import React from "react";
import EpisodeCard from "./EpisodeCard.js";
import { Link } from "react-router-dom";
import styled from "styled-components"


const HomeLink = styled.h3`
  text-align: center;
  padding: 20px;
`;

const EpisodeList = (props) => {
    return (
        <div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>

            <div className="cards">
                {props.episode.map(item => {
                    return <EpisodeCard  key={item.id} name={item.name} air_date={`Aired on ${item.air_date}`} episode={`Episode #: ${item.episode}`} />
                })}
            </div>

            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
}

export default EpisodeList;