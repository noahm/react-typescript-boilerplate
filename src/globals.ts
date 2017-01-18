import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';

import { GlobalState } from './state/GlobalState';
import { dataReducer } from './reducers/dataReducer';

export let store: Store<GlobalState>;

export function initGlobals() {
    store = createStore(
        combineReducers<GlobalState>({
            data: dataReducer,
        }),
        applyMiddleware(thunk),
    );
}
