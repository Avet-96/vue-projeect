import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/posts';

export class PostApi {
    static createPost(data) {
        return axios.post('/create-post', {...data})
    }
}