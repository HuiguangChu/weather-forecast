import { action } from 'typesafe-actions';

export enum CounterActionTypes {
    INCREASE_COUNTER = 'INCREASE_COUNTER',
    DECREASE_COUNTER = 'DECREASE_COUNTER',
}

export type CounterAction = IncreaseAction | DecreaseAction;

interface IncreaseAction {
    type: CounterActionTypes.INCREASE_COUNTER;
}
interface DecreaseAction {
    type: CounterActionTypes.DECREASE_COUNTER;
}

export const onIncreaseClick = (): IncreaseAction => action(CounterActionTypes.INCREASE_COUNTER);

export const onDecreaseClick = (): DecreaseAction => action(CounterActionTypes.DECREASE_COUNTER);
