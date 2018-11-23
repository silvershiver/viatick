const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
    const res = {};
    [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
    return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = 'LOGOUT'; // logout is always success

export const REGISTER = 'USER_REGISTER';

// network
export const NETWORK_MONITOR_CHECKING = 'NETWORK_MONITOR_CHECKING'
export const NETWORK_MONITOR_DETAILS = 'NETWORK_MONITOR_DETAILS'

//Province
export const PROVINCE = createRequestTypes('PROVINCE');
export const CITY = createRequestTypes('CITY');
export const DISTRICT = createRequestTypes('DISTRICT');
export const VILLAGE = createRequestTypes('VILLAGE');

export const DISTANCE = createRequestTypes('DISTANCE');

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';


export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'