
const categoris = [
    { name: 'Nader', quantity: 36 },
    { name: 'Amanda', quantity: 24 },
    { name: 'Jason', quantity: 44 }
]

const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(categoris)
        }, 2000)
    })
}

module.exports = {
    getCategories,

};