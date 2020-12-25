import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';

export default class UserApi {
    static userSingUp(data) {
        return axios.post('/user/user-sing-up', {...data})
    }

    static userSignIn(data) {
        return axios.post('/user/user-sing-in', {...data})
    }

    static getUserData(token) {
        return axios.post('/user/get-uer-data', {token})
    }

    static logout(token) {
        return axios.post('/user/user-logout', {token})
    }
}