import RegistrationFetch from '../api/RegistrationFetch'

export default {
    actions: {
        async userRegistration({dispatch, commit}, {name, last_name, birth_date, password, confirmed_password, email}) {
            try {
                let data = {name, last_name, birth_date, password, confirmed_password, email}
                let regStat = await RegistrationFetch.userSingUp({...data})
                commit('registrationStatus', regStat.statusText)
            } catch (e) {
                throw e
            }
        },
        async userLogin({dispatch, commit}, {email, password}) {
            try {
                let userData = await RegistrationFetch.userSignIn({email, password})
                if (!userData.data.token) {
                    alert('your email or password invalid')
                } else {
                    localStorage.setItem('token', `${userData.data.token}`)
                }
            } catch (e) {
                throw e
            }
        },
        async getUserData({commit}) {
            try {
                let token = localStorage.getItem('token')
                let getData = await RegistrationFetch.getUserData(token)
                commit('userData', getData.data)
            } catch (e) {
                throw e
            }
        },
        async logout({commit}) {
            try {
                let token = localStorage.getItem('token')
                await RegistrationFetch.logout(token)
                commit('clearData')
            } catch (e) {
                throw e
            }

        }
    },
    state: {
        data: [],
        status: ''
    },
    mutations: {
        userData(state, data) {
            state.data = data
        },
        clearData(state) {
            state.data = []
        },

        registrationStatus(state, status) {
            state.status = status
        }
    },
    getters: {
        useData(state) {
            return state.data
        },
        registrationStatus(state) {
            return state.status
        }
    }
}