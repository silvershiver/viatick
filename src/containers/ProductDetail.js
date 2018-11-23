import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductDetail from '../components/ProductDetail'

import getProductDetail from '../actions/getProductDetail'

const actions = {
    getProductDetail
};

const selectors = {

}

class ProductDetailContainer extends Component {
    render() {
        return <ProductDetail {...this.props} />;
    }
}

export default connect(createStructuredSelector(selectors), actions)(ProductDetailContainer)