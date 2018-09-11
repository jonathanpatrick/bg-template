import {
    MODIFY_NODE, INITIALIZE_NODE_MAP
} from "../constants/BoardConstants";

import { HexModel } from "../../shared/types/Hex";
import { NodeModel } from "../../shared/types/Node";

export interface BoardState {
    hexMap: HexModel[][];
    nodeMap: NodeModel[][];
}

const defaultState = {
    hexMap: [],
    nodeMap: []
};

export function Reducer(oldState: BoardState = defaultState, action: any) {
    switch (action.type) {
        case MODIFY_NODE: {
            let nodeMap = oldState.nodeMap;

            nodeMap[action.row][action.col] = action.node;
            return Object.assign({}, oldState || {}, {
                nodemap: nodeMap
            });
        }

        case INITIALIZE_NODE_MAP: {
            return Object.assign({}, oldState || {}, {
                nodemap: action.nodeMap
            });
        }

        default: {
            return oldState;
        }
    }
}