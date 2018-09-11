import * as React from "react";
import NodeContainer from "./NodeContainer";

export interface IHexProps {
    xPosition: number;
    yPosition: number;
    resource: string;
    number: number;
}

const Hex = (props: IHexProps) => {

    const hexClass = `hexagon hex_${props.resource}`;
    return (


        <div className={hexClass}>
            <div className="hexTop"></div>
            <h1>
                {props.number} :
                {props.resource}
            </h1>
            <NodeContainer position={"top-middle"} />
            <NodeContainer position={"bottom-middle"} />
            <NodeContainer position={"top left"} />
            <NodeContainer position={"bottom left"} />
            <NodeContainer position={"top right"} />
            <NodeContainer position={"bottom right"} />
            <div className="hexBottom"></div>
        </div>


    )
};

export default Hex;