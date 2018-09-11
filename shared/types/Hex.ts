import { NodeModel } from "./Node"

export interface HexModel {

    resourceNumber: number;
    resourceType: string;
    nodes: NodeModel[];
}