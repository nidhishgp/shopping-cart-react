import axios from 'axios';

export const fetchData = page => {
    return new Promise((resolve, reject) => {
        axios.get('/api/products', {
            params: {page}
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error.response.data);
        })
    })
}