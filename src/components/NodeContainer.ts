import { connect } from "react-redux";
// import { Player } from "../../shared/types/Player";

import BoardActions from "../actions/BoardActions"
import { RootState } from "../reducers/RootReducer";
import { NodeModel } from "shared/types/Node";
import Node from "./Node";

interface StateProps {
    node?: NodeModel;
    position: string;
}

interface DispatchProps {
    modifyNode: (node: NodeModel) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): StateProps => {
    debugger;
    return {

        node: state.board.nodeMap[ownProps.x][ownProps.y],
        position: ownProps.position
        // hexMap: state.bo,
        // nodeMap: 
    };
};

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        modifyNode(node) {
            dispatch(BoardActions.modifyNode(node))
        }
    };
}

export type NodeProps = DispatchProps & StateProps;
export default connect(mapStateToProps, mapDispatchToProps)(
    Node
) as any;