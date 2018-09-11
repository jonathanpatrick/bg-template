import * as Redux from "redux";
import * as PlayerReducer from "./PlayerReducer";
import * as BoardReducer from "./BoardReducer";

export interface RootState {
    players: PlayerReducer.PlayerState;
    board: BoardReducer.BoardState
}

const rootReducer = Redux.combineReducers<RootState>({
    players: PlayerReducer.Reducer,
    board: BoardReducer.Reducer
});

export default rootReducer;