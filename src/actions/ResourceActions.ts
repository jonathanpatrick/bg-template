import {
    ALTER_RESOURCES
} from "../constants/ResourceConstants";
import { ResourceDiff } from "../../shared/types/Resources";



export default class ResourceActions {
    static alterPlayerResources(diff: ResourceDiff, pid: number) {
        return async (dispatch: any) => {
            return dispatch({
                type: ALTER_RESOURCES,
                diff: diff,
                pid: pid
            });
        };
    }
}