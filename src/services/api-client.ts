import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c5718bd04bd441629a894e0f329557bf'
    }
})