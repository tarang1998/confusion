import {createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Reducer, initialState } from './reducer'

import { Dishes } from './reducers/dishes';
import { Comments } from './reducers/comments';
import { Promotions } from './reducers/promotions';
import { Leaders } from './reducers/leaders';

export const ConfigureStore = () => {
    
    const store = configureStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}