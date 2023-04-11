import { initialState, appRootReducer } from './reducer';
import { setCurrentPosition } from './actions';
import { AppRootState } from '../../services/types';
import { currentPositionMock } from './mockedData';

describe('appRoot reducer test', () => {
    it('should load initial state if no action triggered', () => {
        const state: AppRootState = appRootReducer(undefined, {} as any);

        expect(state).toEqual(initialState);
    });
    it('should set currentPosition if action SET_CURRENT_POSITION triggered with no-empty value', () => {
        const expectedState: AppRootState = {
            ...initialState,
            currentPosition: currentPositionMock,
        };

        const state: AppRootState = appRootReducer(initialState, setCurrentPosition(currentPositionMock));
        expect(state).toEqual(expectedState);
    });

    // TODO: Write more test to the other actions
});
