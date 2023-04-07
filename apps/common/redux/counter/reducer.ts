import { CounterAction, CounterActionTypes } from './actions';

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0,
};

export const counterReducer = (state = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
    case CounterActionTypes.INCREASE_COUNTER:
        return {
            ...state,
            counter: state.counter + 1,
        };
    case CounterActionTypes.DECREASE_COUNTER:
        return {
            ...state,
            counter: state.counter - 1,
        };
    default:
        return state;
    }
};
