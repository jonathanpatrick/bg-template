import * as React from "react";

export interface ICardProps {
    resourceType: string;
    cardIndex: number;
    inHand: boolean;
}


const Card = (props: ICardProps) => {
    const cardClass = `card resource_${props.resourceType} ${props.inHand ? "in-hand" : ""}`
    return (
        <div draggable={true} className={cardClass} key={props.cardIndex}>

            {/* <Link
        to={`/statements/?page=${props.pageNum}`}
        onClick={() => props.changePage(props.pageNum)}
      >
        {props.pageNum}
      </Link> */}
        </div>
    );
};
export default Card;