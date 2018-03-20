import { Dispatch } from 'redux';

import { GlobalStateGetter } from "../state/GlobalState";

// Fetch List Succeeded
export const FETCH_LIST_SUCCEEDED = 'FETCH_LIST_SUCCEEDED';
export type FetchListSucceeded = {
    type: typeof FETCH_LIST_SUCCEEDED;
    data: any,
};

function fetchListSucceeded(params: any): FetchListSucceeded {
    return { type: FETCH_LIST_SUCCEEDED, data: params };
}

// Fetch List Thunk
export function fetchData(params: any) {
    return (dispatch: Dispatch<any>, _getState: GlobalStateGetter) => {

        const request = fetch(`/api/list/${encodeURI(params.data)}`);
        request.then(resp => resp.json() as Promise<any>).then(response => {
            // stuff!!!?
            dispatch(fetchListSucceeded(response));
        });
        return request;
    };
}
