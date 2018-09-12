import * as React from "react";
import { BoardProps } from "./BoardContainer";
// import Hex from "./Hex";
// import { NodeModel } from "../../shared/types/Node";
// import svgtest from "./svgtest";
// import Node from "./Node";
// import BoardRow from "./BoardRow";
// import { Grid, Row, Col } from 'react-bootstrap';

// const boardRowLengths = [3, 4, 5, 4, 3];
export default class Board extends React.Component<BoardProps, {}>{

    constructor(props: BoardProps) {
        super(props);
    }
    hexWidth = 200;
    hexHeight = 240;

    topX = 100;
    topY = 0;
    upperLeftX = 0;
    upperLeftY = 60;
    bottomLeftX = 0;
    bottomLeftY = 180;
    bottomX = 100;
    bottomY = 240;
    bottomRightX = 200;
    bottomRightY = 180;
    upperRightX = 200;
    upperRightY = 60;

    populateNodes() {

    }

    drawBoard() {

        return (
            <div className="board">

                <svg id="board-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1500" height="1500">
                    <defs>
                        <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
                            <image width="1000" height="1000" ></image>
                        </pattern>
                    </defs>



                    {/* <polygon className="hex" points="100,240 200,180 200,60 100,0 0,60 0,180" fill="url('#image-bg')"></polygon> */}
                    {this.createHexRow(1, 3)}
                    {this.createHexRow(2, 4)}
                    {this.createHexRow(3, 5)}
                    {this.createHexRow(4, 4)}
                    {this.createHexRow(5, 3)}

                </svg >
            </div>
        )


    }


    // createNodeRow(row: number, count: number, nodeMap: NodeModel[][]) {

    //     for (var i = 1; i < count; i++) {
    //         let node: NodeModel = {
    //             xPosition: i,
    //             yPosition: row,
    //             created: false,
    //             structure: "",
    //             controllingPlayerID: ""
    //         };

    //         nodeMap[i][row] = node;
    //     }

    // }

    createHexRow(row: number, count: number) {

        let hexes: any = [];

        for (var i = 0; i < count; i++) {
            let num = Math.floor(Math.random() * 11) + 2;
            // let res = this.randomResource(Math.floor(Math.random() * 5) + 1);
            //Second offset column
            let points = (this.topX + (this.hexWidth * i)) + "," + (this.topY + (this.hexHeight * row))
                + " " + (this.upperLeftX + (this.hexWidth * i)) + "," + (this.upperLeftY + (this.hexHeight * row))
                + " " + (this.bottomLeftX + (this.hexWidth * i)) + "," + (this.bottomLeftY + (this.hexHeight * row))
                + " " + (this.bottomX + (this.hexWidth * i)) + "," + (this.bottomY + (this.hexHeight * row))
                + " " + (this.bottomRightX + (this.hexWidth * i)) + "," + (this.bottomRightY + (this.hexHeight * row))
                + " " + (this.upperRightX + (this.hexWidth * i)) + "," + (this.upperRightY + (this.hexHeight * row))
            // let hexClass = "hex hex_" + res
            var html = (
                <g>
                    <polygon points={points} className="hex" ></polygon>
                    <text x={this.hexWidth * (i + 1) - .5 * this.hexWidth} y={this.hexHeight * (row + 1) - .5 * this.hexHeight} >{num}</text>
                </g>
                // <polygon points={points} className="hex" ></polygon>
            )
            hexes.push(html);
        }

        return hexes;
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