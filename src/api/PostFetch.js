import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';

export class PostApi {
    static createPost(data) {
        return axios.post('/posts/create-post', {...data})
    }
}