import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';
import { combineReducers } from 'redux';
import { general } from './generalSlice';

const rootReducer = combineReducers({
    general,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
});