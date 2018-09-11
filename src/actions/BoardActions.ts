import {
    MODIFY_NODE,
    INITIALIZE_NODE_MAP
} from "../constants/BoardConstants";
import { NodeModel } from "../../shared/types/Node";



export default class ResourceActions {
    static modifyNode(node: NodeModel) {
        return async (dispatch: any) => {

            return dispatch({
                type: MODIFY_NODE,
                node: node
            });
        };
    }

    static createNode(xPosition: number, yPosition: number) {
        return async (dispatch: any) => {
            let node: NodeModel = {
                xPosition: xPosition,
                yPosition: yPosition,
                structure: "",
                controllingPlayerID: "",
                created: true
            };

            return dispatch({
                type: MODIFY_NODE,
                node: node
            })
        }
    }

    static setNodemap(map: NodeModel[][]) {
        return async (dispatch: any) => {
            return dispatch({
                type: INITIALIZE_NODE_MAP,
                nodeMap: map
            })
        }
    }
}