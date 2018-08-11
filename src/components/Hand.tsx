import * as React from "react";
import Card from "./Card";

export interface IHandProps {
    resources: string[];
    activeCardIndex?: number;
}

const Hand = (props: IHandProps) => {
    const cards: any = [];
    for (let i = 0; i < props.resources.length; i++) {
        cards.push(
            <Card resourceType={props.resources[i]} key={i} cardIndex={i} inHand={true} />
        );
    }
    return <div>{cards}</div>
};

export default Hand;