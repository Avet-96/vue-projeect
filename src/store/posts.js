import {PostApi} from "@/api/PostFetch";

export default {
    actions: {
        async createPost({dispatch, commit}, {title, description}) {
            try {
                let user_id = this.state.auth.data.user.id
                let data = {user_id, title, description}
                await PostApi.createPost({...data})
            } catch (e) {
                throw e
            }
        },
        async allPosts({dispatch, commit}, {offset}) {
            try {
                let data = await PostApi.allPosts(offset)
                commit('allData', data.data)
            } catch (e) {
                throw e
            }
        },

        async deletePost({dispatch}, {id}) {
            try {
                let token = localStorage.getItem('token')
                await PostApi.deletePost(id, token)
            } catch (e) {
                throw e
            }
        },

        async updatePostData({dispatch}, {id, title, description}) {
            try {
                let token = localStorage.getItem('token')
                let data = {id, token, title, description}
                await PostApi.updatePost(data)
            } catch (e) {
                throw e
            }
        }
    },
    state: {
        postsData: []
    },
    mutations: {
        allData(state, data) {
            state.postsData = data
        }
    },
    getters: {
        allDat(state) {
            return state.postsData
        }
    }
}