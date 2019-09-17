import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodeCard = (props) => (
    <Card
        header={props.name}
        meta={props.air_date}
        description={props.episode}
    />
)

export default EpisodeCard;