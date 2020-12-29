import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';

export class PostApi {
    static createPost(data) {
        return axios.post('/posts/create-post', {...data})
    }

    static allPosts(offset = 10) {
        return axios.get(`/posts/all-posts?offset=${offset}`)
    }

    static deletePost(id, token) {
        return axios.put('/posts/delete-post', {id, token})
    }

    static updatePost(data) {
        return axios.put('/posts/update-post-pages-data', {...data})
    }
}