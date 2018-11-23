
const product = {
    title: 'tShirt',
    price: 2000
}

const getProductDetail = (productDetail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(product)
        }, 3000)
    })
}

module.exports = {
    getProductDetail,

};