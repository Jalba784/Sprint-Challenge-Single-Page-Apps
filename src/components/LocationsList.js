import React from "react";
import LocationCard from "./LocationCard.js";
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

            <div className="cards">
                {props.location.map(item => {
                    return <LocationCard  key={item.id} name={item.name} type={item.type} dimension={item.dimension} />
                })}
            </div>


            <HomeLink>
                <Link to="/">Home</Link>
            </HomeLink>
        </div>
    );
}

export default LocationsList;
// export default function LocationsList() {}
