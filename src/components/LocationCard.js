import React from "react";
import { Card, Icon } from "semantic-ui-react";



const LocationCard = (props) => (
    <Card
        header={props.name}
        meta={props.type}
        description={props.dimension}
    />
)

export default LocationCard;