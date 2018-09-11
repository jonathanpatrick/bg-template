import * as React from "react";
import { BoardProps } from "./BoardContainer";
import Hex from "./Hex";
import { NodeModel } from "../../shared/types/Node";
// import svgtest from "./svgtest";
// import Node from "./Node";
// import BoardRow from "./BoardRow";
// import { Grid, Row, Col } from 'react-bootstrap';

// const boardRowLengths = [3, 4, 5, 4, 3];
export default class Board extends React.Component<BoardProps, {}>{

    constructor(props: BoardProps) {
        super(props);
    }

    populateNodes() {

    }

    drawBoard() {

        return (
            <div className="board">
                {/* {this.createHexRow(1, 3)}
                {this.createHexRow(2, 4)}
                {this.createHexRow(3, 5)}
                {this.createHexRow(4, 4)}
                {this.createHexRow(5, 3)} */}
                <svg id="board-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500">
                    <defs>
                        <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
                            <image width="300" height="300" ></image>
                        </pattern>
                    </defs>
                    <polygon className="hex" points="30,15 22.5,28 7.5,28 0,15 7.5,2.0 22.5,2.0" fill="url('#image-bg')"></polygon>
                </svg >
            </div>
        )


    }


    createNodeRow(row: number, count: number, nodeMap: NodeModel[][]) {

        for (var i = 1; i < count; i++) {
            let node: NodeModel = {
                xPosition: i,
                yPosition: row,
                created: false,
                structure: "",
                controllingPlayerID: ""
            };

            nodeMap[i][row] = node;
        }

    }

    createHexRow(row: number, count: number) {

        let cols: any = [];

        for (var i = 1; i <= count; i++) {
            let num = Math.floor(Math.random() * 11) + 2;
            let res = this.randomResource(Math.floor(Math.random() * 5) + 1);
            cols.push(<Hex resource={res} number={num} xPosition={i} yPosition={row} />);
        }
        //Second offset column
        var html = (
            <div className="board__row">
                {cols}
            </div>
        )
        return html;
    }

    randomResource(num: number): string {
        console.log("num: ", num)
        switch (num) {
            case 1:
                return "clay";
            case 2:
                return "lumber";
            case 3:
                return "ore";
            case 4:
                return "wheat";
            case 5:
                return "wool";
        }
        return ""
    }

    render() {
        return (

            <div>
                {this.drawBoard()}
            </div>
        )
    }
}