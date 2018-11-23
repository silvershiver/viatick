

export const numberWithCommas = (x) => {
    if (x == null) {
        return ''
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatCurrency = (x) => {
    return '$' + numberWithCommas(x)
}