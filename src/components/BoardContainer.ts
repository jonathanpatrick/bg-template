import { connect } from "react-redux";
import { Player } from "../../shared/types/Player";
import { ResourceDiff } from "../../shared/types/Resources";
import Board from "./Board";
//import { Hex } from "../../shared/types/Hex";
//import { Node } from "../../shared/types/Node";
import ResourceActions from "../actions/ResourceActions"
import BoardActions from "../actions/BoardActions"
import { RootState } from "../reducers/RootReducer";
import { NodeModel } from "shared/types/Node";

interface StateProps {
    activePlayer: Player;
    // hexMap: Hex[][];
    // nodeMap: Node[][];
}

interface DispatchProps {
    alterPlayerResources: (diff: ResourceDiff, pid: number) => void;
    modifyNode: (node: NodeModel) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): StateProps => {
    return {

        activePlayer: state.players.players[0],
        // hexMap: state.bo,
        // nodeMap: 
    };
};

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        alterPlayerResources(diff, pid) {
            dispatch(ResourceActions.alterPlayerResources(diff, pid));
        },
        modifyNode(node) {
            dispatch(BoardActions.modifyNode(node))
        }
    };
}

export type BoardProps = DispatchProps & StateProps;
export default connect(mapStateToProps, mapDispatchToProps)(
    Board
) as any;