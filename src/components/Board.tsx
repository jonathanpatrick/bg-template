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
                        <pattern id="image-bg" height="240" width="200" patternUnits="userSpaceOnUse">
                            <image href={"http://placekitten.com/306/306"} width="300" height="300" ></image>
                        </pattern>
                    </defs>



                    {/* <polygon className="hex" points="100,240 200,180 200,60 100,0 0,60 0,180" fill="url('#image-bg')"></polygon> */}
                    {this.createHexRow(1, 3, this.hexWidth, 0)}
                    {this.createHexRow(2, 4, (this.hexWidth / 2), (this.bottomY - this.bottomLeftY))}
                    {this.createHexRow(3, 5, 0, (this.bottomY - this.bottomLeftY) * 2)}
                    {this.createHexRow(4, 4, (this.hexWidth / 2), (this.bottomY - this.bottomLeftY) * 3)}
                    {this.createHexRow(5, 3, this.hexWidth, (this.bottomY - this.bottomLeftY) * 4)}

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

    createHexRow(row: number, count: number, xOffset: number, yOffSet: number) {

        let hexes: any = [];

        for (var i = 0; i < count; i++) {
            let num = Math.floor(Math.random() * 11) + 2;
            let res = this.randomResource(Math.floor(Math.random() * 5) + 1);
            //Second offset column
            let points = (this.topX + (this.hexWidth * i) + xOffset) + "," + (this.topY + (this.hexHeight * row) - yOffSet)
                + " " + (this.upperLeftX + (this.hexWidth * i) + xOffset) + "," + (this.upperLeftY + (this.hexHeight * row) - yOffSet)
                + " " + (this.bottomLeftX + (this.hexWidth * i) + xOffset) + "," + (this.bottomLeftY + (this.hexHeight * row) - yOffSet)
                + " " + (this.bottomX + (this.hexWidth * i) + xOffset) + "," + (this.bottomY + (this.hexHeight * row) - yOffSet)
                + " " + (this.bottomRightX + (this.hexWidth * i) + xOffset) + "," + (this.bottomRightY + (this.hexHeight * row) - yOffSet)
                + " " + (this.upperRightX + (this.hexWidth * i) + xOffset) + "," + (this.upperRightY + (this.hexHeight * row) - yOffSet)
            let hexClass = "hex hex_" + res
            // let hexFill = "url(#image-bg)";
            var html = (
                <g>
                    <polygon points={points} className={hexClass} ></polygon>
                    <text x={(this.hexWidth * (i + 1) - .5 * this.hexWidth) + xOffset} y={(this.hexHeight * (row + 1) - .5 * this.hexHeight) - yOffSet} >{num}</text>
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