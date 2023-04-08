import {DashboardAction, DashboardActionTypes} from "./actions";
import { WeatherData } from "../../services/dataParcer";
import { LocationState } from "history";

export interface CurrentPosition {
    latitude: number;
    longitude: number;
}
export interface DashboardState {
    defaultsCities?: string[];
    isDataLoading?: boolean;
    dataForDisplay?: WeatherData[];
    currentPosition?: CurrentPosition;
}
export const initialState: DashboardState = {
    defaultsCities: ['Oslo', 'Stockholm'],
    dataForDisplay: null,
    isDataLoading: true,
    currentPosition: null,
};

export interface RootState {
    readonly dashboard: DashboardState;
}

export const dashboardReducer = (state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    switch (action.type) {
        case DashboardActionTypes.WEATHER_DATA_LOADED:
            return {
                ...state,
                dataForDisplay: action.payload.data,
            };
        case DashboardActionTypes.SET_CURRENT_POSITION:
            return  {
                ...state,
                currentPosition: action.payload.position,
            };

        default:
            return state
    }
};


