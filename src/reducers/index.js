// import { combineReducers } from 'redux-immutablejs';

import loginData from './user'
import category from './category';
import product from './product';
import provinces from './province'
import cities from './city'
import districts from './district'
import villages from './village'
import network from './network'
import distances from './distance'

import { combineReducers } from 'redux'
import appData from './dataReducer'



export default combineReducers({
    loginData,
    category,
    product,
    provinces,
    cities,
    districts,
    villages,
    network,
    distances,
})