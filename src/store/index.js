import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import posts from "@/store/posts";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,posts
    }
})
