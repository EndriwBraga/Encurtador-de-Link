
import axios from 'axios';

export const key = "042080737b0e0d671a64e55516b20aa7fc1fa41b";

const api = axios.create ({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
} 

})
export default api;