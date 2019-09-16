import React from "react";
import { Card } from "semantic-ui-react";

const CardExampleCardProps = (props) => (
    <Card
      image={props.img}
      header={props.name}
      meta={props.species}
      description={props.created}
    />
)

export default CardExampleCardProps;


// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }
