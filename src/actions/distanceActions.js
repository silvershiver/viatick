import config from "constants/config";
import * as types from 'constants/actionTypes'
import * as constants from 'constants/index'
import axios from 'axios'
import myAxios from '../apis/myAxios'

//const URL = `${config.BASE_URL}${config.PROVINCE}}`;

///// PROVINCES ACTIONS
export function distanceRequest() {
    return {
        type: types.DISTANCE.REQUEST,
    }
}

export function distanceSuccess(distanceList) {
    return {
        type: types.DISTANCE.SUCCESS,
        data: distanceList,
    };
}

export function distanceFailure(error) {
    return {
        type: types.DISTANCE.FAILURE,
        error,
    };
}

export function getDistance() {
    return dispatch => {
        
        dispatch(distanceRequest());

        var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=10.776540,106.626659&destinations=10.754615,106.639541|10.774082,106.664361|10.783794,106.654187&key='

        url = url.concat(constants.config.GOOGLE_MAPS_APIKEY)

        axios.get(url)
            .then(function (response) {
                console.log(response);
                //var distanceList = response.data.rows[0].elements
                dispatch(distanceSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(provinceFailure(error));
            });
    };
}

///// CITIES ACTIONS

export function citySuccess(cityList) {
    return {
        type: types.CITY.SUCCESS,
        data: cityList,
    };
}

export function cityFailure(error) {
    return {
        type: types.CITY.FAILURE,
        error,
    };
}

export function getCities(provinceId) {
    return dispatch => {
        
        var body = new FormData();
        body.append("province_id", provinceId);
        
        myAxios.getInstance().post(config.CITY_REGENCY,body)
            .then(function (response) {
                console.log(response);
                var currentList = response.data[0].city_regency_list
                if (currentList) {
                    dispatch(citySuccess(currentList));
                } else {
                    dispatch(cityFailure(null));
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(cityFailure(error));
            });

    };
}

///// DISTRICTS ACTIONS

export function districtSuccess(cityList) {
    return {
        type: types.DISTRICT.SUCCESS,
        data: cityList,
    };
}

export function districtFailure(error) {
    return {
        type: types.DISTRICT.FAILURE,
        error,
    };
}

export function getDistricts(cityRegencyId) {
    return dispatch => {
        
        var body = new FormData();
        body.append("city_regency_id", cityRegencyId);
        
        myAxios.getInstance().post(config.DISTRICT,body)
            .then(function (response) {
                console.log(response);
                var currentList = response.data[0].district_list
                if (currentList) {
                    dispatch(districtSuccess(currentList));
                } else {
                    dispatch(districtFailure(null));
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(districtFailure(error));
            });

    };
}

///// VILLAGES ACTIONS

export function villageSuccess(cityList) {
    return {
        type: types.VILLAGE.SUCCESS,
        data: cityList,
    };
}

export function villageFailure(error) {
    return {
        type: types.VILLAGE.FAILURE,
        error,
    };
}

export function getVillages(districtId) {
    return dispatch => {
        
        var body = new FormData();
        body.append("district_id", districtId);
        
        myAxios.getInstance().post(config.VILLAGE,body)
            .then(function (response) {
                console.log(response);
                var currentList = response.data[0].village_list
                if (currentList) {
                    dispatch(villageSuccess(currentList));
                } else {
                    dispatch(villageFailure(null));
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(villageFailure(error));
            });
    };
}