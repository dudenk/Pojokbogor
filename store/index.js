import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import axios from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      post: {},
      posts: []
    },
    //plugins: [createPersistedState()],
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      }
    },
    actions: {
      async getPosts ({commit}) {
        let {data} = await axios.get(`posts`)
        commit('setPosts', data)
      },
      async getPost ({commit, store}, slug) {
        let {data} = await axios.get(`v2/posts/?slug=${slug}`)
        commit('setCurrentPost', data)
      },
      async nuxtServerInit ({commit}, {store, client, server, route, params}) {
        if (server && route.name === 'topik') {
          let {data} = await axios.get('posts')
          commit('setPosts', data)
        }
        if (server && params.slug) {
          let {data} = await axios.get(`v2/posts/?slug=${params.slug}`)
          commit('setCurrentPost', data)
        }
      }
    }
  })
}

export default createStore
