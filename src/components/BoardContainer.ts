import { connect } from "react-redux";
import { Player } from "../../shared/types/Player";
import { ResourceDiff } from "../../shared/types/Resources";
import Board from "./Board"
import ResourceActions from "../actions/ResourceActions"
import { RootState } from "../reducers/RootReducer";

interface StateProps {
    activePlayer: Player;
}

interface DispatchProps {
    alterPlayerResources: (diff: ResourceDiff, pid: number) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): StateProps => {
    debugger;
    return {

        activePlayer: state.players.players[0]
    };
};

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        alterPlayerResources(diff, pid) {
            dispatch(ResourceActions.alterPlayerResources(diff, pid));
        }
    };
}

export type BoardProps = DispatchProps & StateProps;
export default connect(mapStateToProps, mapDispatchToProps)(
    Board
) as any;