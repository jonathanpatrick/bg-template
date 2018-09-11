import { connect } from "react-redux";
// import { Player } from "../../shared/types/Player";
// import { ResourceDiff } from "../../shared/types/Resources";
import Hex from "./Hex";
// import ResourceActions from "../actions/ResourceActions"
import BoardActions from "../actions/BoardActions"
import { RootState } from "../reducers/RootReducer";
import { HexModel } from "shared/types/Hex";
import { NodeModel } from "shared/types/Node";

interface StateProps {
    hex: HexModel;
}

interface DispatchProps {
    setNodeCreated: (node: NodeModel) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): StateProps => {
    return {

        hex: state.board.hexMap[ownProps.x][ownProps.y],
        // hexMap: state.bo,
        // nodeMap: 
    };
};

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        setNodeCreated(node: NodeModel) {
            node.created = true;
            dispatch(BoardActions.modifyNode(node))
        }
    };
}

export type HexProps = DispatchProps & StateProps;
export default connect(mapStateToProps, mapDispatchToProps)(
    Hex
) as any;