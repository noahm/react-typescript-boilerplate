import { DataState } from './DataState';

export interface GlobalState {
    data: DataState;
}

export interface GlobalStateGetter {
    (): GlobalState;
}
