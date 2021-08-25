import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4004';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}