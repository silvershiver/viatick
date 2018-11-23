import { createSelector } from 'reselect';

const product = (state) => state.get('product');

export default () => product;