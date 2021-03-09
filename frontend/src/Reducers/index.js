import { combineReducers } from 'redux';

import post from './post';
import product from './product'

export const reducers = combineReducers({ post,product });