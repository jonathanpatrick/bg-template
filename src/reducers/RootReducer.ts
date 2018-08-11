import * as Redux from "redux";
import * as PlayerReducer from "./PlayerReducer"

export interface RootState {
    players: PlayerReducer.PlayerState;
}

const rootReducer = Redux.combineReducers<RootState>({
    players: PlayerReducer.Reducer
});

export default rootReducer;