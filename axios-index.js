const axios = require('./node_modules/axios/dist/axios.js');

const asyncFunction = async () => {
    try {
        const ipify = await axios.get('https://api.ipify.org?format=json')
        console.log(ipify.data)
    } catch (error) {
        console.log('err:', error)
    }
}

asyncFunction()