import * as React from "react";
import { NodeProps } from "./NodeContainer";

export default class Node extends React.Component<NodeProps, {}>{
    constructor(props: NodeProps) {
        super(props);
    }

    render() {
        let nodeClass: string = `node ${this.props.position} ${this.props.node ? this.props.node.structure : ""}`
        return (

            <div className={nodeClass}></div>
        )
    }

}
