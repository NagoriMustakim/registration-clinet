import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_DEV_SERVER;



export async function additem(data) {
    console.log(data);
    return 'message'
}