import * as React from "react";
import { BoardProps } from "./BoardContainer";
export default class Board extends React.Component<BoardProps, {}>{

    constructor(props: BoardProps) {
        super(props);
    }

    render() {
        return (
            <h1> THIS IS A GAME BOARD </h1>
        )
    }
}