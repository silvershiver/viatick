import { GET_PRODUCT_DETAIL } from '../constants/actionTypes'

export default (productId) => {
    type: GET_PRODUCT_DETAIL,
    productId
};