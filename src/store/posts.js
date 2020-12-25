import {PostApi} from "@/api/PostFetch";

export default {
    actions: {
        async createPost({dispatch, commit}, {title, description}) {
            try {
                let user_id = this.state.auth.data.user.id
                let data = {user_id, title, description}
                console.log(data)
                await PostApi.createPost({...data})
            } catch (e) {
                throw e
            }
        }
    },
    state: {
        data: []
    },
    mutations: {},
    getters: {}
}