import {
  ALTER_RESOURCES
} from "../constants/ResourceConstants";
// import { ResourceDiff } from "../../shared/types/Resources";
import { Player } from "../../shared/types/Player";

export interface PlayerState {
  players: Player[];
}

const defaultState = {
  players: []
};

export function Reducer(oldState: PlayerState = defaultState, action: any) {
  switch (action.type) {
    case ALTER_RESOURCES: {
      let players = oldState.players;
      players[action.pid].resources.clay += action.diff.clay;
      players[action.pid].resources.lumber += action.diff.lumber;
      players[action.pid].resources.ore += action.diff.ore;
      players[action.pid].resources.wheat += action.diff.wheat;
      players[action.pid].resources.wool += action.diff.wool;

      return Object.assign({}, oldState || {}, {
        players: players
      });
    }

    default: {
      return oldState;
    }
  }
}