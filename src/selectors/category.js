import { createSelector } from 'reselect';

const category = (state) => state.get('category');

export default () => category;