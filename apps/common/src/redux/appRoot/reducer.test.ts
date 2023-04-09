import { initialState, appRootReducer } from './reducer';
import { setCurrentPosition } from './actions';
import { AppRootState, CurrentPosition } from '../../services/types';

describe('appRoot reducer test', () => {
    it('should load initial state if no action triggered', () => {
        const expectedState: AppRootState = appRootReducer(undefined, {} as any);

        expect(expectedState).toEqual(initialState);
    });
    it('should set currentPosition if action SET_CURRENT_POSITION triggered with no-empty value', () => {
        const mockedPosition: CurrentPosition = {
            longitude: 123.12,
            latitude: 123.11,
        };
        const expectedState: AppRootState = {
            ...initialState,
            currentPosition: mockedPosition,
        };

        const state: AppRootState = appRootReducer(initialState, setCurrentPosition(mockedPosition));
        expect(state).toEqual(expectedState);
    });
});
