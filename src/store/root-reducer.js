import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-reducer';
import { countriesReducer } from './countris/countries-reducer';
import {controlsReducer} from './controls/controls-reducer'
import { detailsReducer } from './deteils/details-reducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
});