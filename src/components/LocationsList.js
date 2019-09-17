import React from "react";
import location from "./CharacterList.js"
import { Link } from "react-router-dom";
import styled from "styled-components"


const HomeLink = styled.h3`
  text-align: center;
  padding: 20px;
`;

const LocationsList = (props) => {
    return (
        <div>
            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>

            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
}

export default LocationsList;
// export default function LocationsList() {}
