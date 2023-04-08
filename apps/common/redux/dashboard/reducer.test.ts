import { initialState, DashboardState, dashboardReducer, CurrentPosition } from './reducer';
import { setCurrentPosition } from "./actions";

describe('dashboard reducer test', () => {
    it('should load initial state if no action triggered', function () {
        const expectedState: DashboardState = dashboardReducer(undefined, {} as any);

        expect(expectedState).toEqual(initialState);
    });
    it('should set currentPosition if action SET_CURRENT_POSITION triggered with no-empty value', function () {
        const mockedPosition: CurrentPosition = {
            longitude: 123.12,
            latitude: 123.11,
        };
        const expectedState: DashboardState = {
            ...initialState,
            currentPosition: mockedPosition
        };

        const state: DashboardState = dashboardReducer(initialState, setCurrentPosition(mockedPosition));
        expect(state).toEqual(expectedState);
    });

});
