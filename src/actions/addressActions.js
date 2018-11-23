import config from "constants/config";
import * as types from 'constants/actionTypes'
import axios from 'axios'
import myAxios from '../apis/myAxios'

//const URL = `${config.BASE_URL}${config.PROVINCE}}`;

///// PROVINCES ACTIONS
export function provinceRequest() {
    return {
        type: types.PROVINCE.REQUEST,
    }
}

export function provinceSuccess(provinceList) {
    return {
        type: types.PROVINCE.SUCCESS,
        data: provinceList,
    };
}

export function provinceFailure(error) {
    return {
        type: types.PROVINCE.FAILURE,
        error,
    };
}

export function getProvinces() {
    return dispatch => {
        
        //dispatch(provinceRequest());

        myAxios.getInstance().post(config.PROVINCE)
            .then(function (response) {
                console.log(response);
                var provineList = response.data[0].province_list
                if (provineList) {
                    dispatch(provinceSuccess(provineList));
                } else {
                    dispatch(provinceFailure(null));
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(provinceFailure(error));
            });


        // fetch(`${URL}?userName=${userValues.userName}&password=${userValues.password}`)
        //     .then(response => {
        //         if (response.status >= 200 && response.status <= 304) {
        //             response.json().then(data => {
        //                 //After sucess identified, dispatch isLoading false
        //                 dispatch(loginIsLoading(false));
        //                 if (data.length === 0)
        //                     dispatch(loginFailed(new Error("No found")));
        //                 else
        //                     dispatch(loginSuccess(data[0]));
        //             });
        //         }
        //         else {
        //             const error = new Error(response.statusText);
        //             error.response = response;
        //             dispatch(loginIsLoading(false));
        //             dispatch(loginFailed(error));
        //             throw error;
        //         }
        //     })
        //     .catch(error => {
        //         // If any other error occurs
        //         dispatch(loginIsLoading(false));
        //         dispatch(loginFailed(error));
        //     });
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