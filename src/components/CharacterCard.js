import React from "react";
import { Card } from "semantic-ui-react";

const CardExampleCardProps = (props) => (
    <Card
      image={props.img}
      header={props.name}
      meta={props.species}
      description={props.status}
    />
)

export default CardExampleCardProps;