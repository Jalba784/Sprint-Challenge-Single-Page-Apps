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


// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;
// }
