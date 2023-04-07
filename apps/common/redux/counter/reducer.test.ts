import { counterReducer, CounterState } from './reducer';
import { onDecreaseClick, onIncreaseClick } from './actions';

describe('test counter reducer', () => {
    it('should increase the value if increase action called', () => {
        const initialState: CounterState = {
            counter: 0,
        };
        const increaseAction = onIncreaseClick();
        const newState = counterReducer(initialState, increaseAction);

        expect(newState.counter).toEqual(1);
    });

    it('should decrease the value if decrease action called', () => {
        const initialState: CounterState = {
            counter: 1,
        };
        const decreaseAction = onDecreaseClick();
        const newState = counterReducer(initialState, decreaseAction);

        expect(newState.counter).toEqual(0);
    });
});
