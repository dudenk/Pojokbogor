import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import axios from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      post: {},
      tag: {},
      posts: []
    },
    //plugins: [createPersistedState()],
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      },
      setCurrentTag: (state, tag) => {
        state.tag = tag
      }
    },
    actions: {
      async getPosts ({commit}) {
        let {data} = await axios.get(`posts`)
        commit('setPosts', data)
      },
      async getPost ({commit, store}, slug) {
        let {data} = await axios.get(`v2/posts/?slug=${slug}`)
        commit('setCurrentPost', data[0])
      },
      async getTag ({commit, store}, slug) {
        let {data} = await axios.get(`v2/tags/?slug=${slug}`)
        commit('setCurrentTag', data[0])
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        if (isServer && route.name === 'topik-slug') {
          let {data} = await axios.get(`v2/tags/?slug=${params.slug}`)
          commit('setCurrentTag', data[0])
          //let {data} = await axios.get('posts')
          //commit('setPosts', data)
        }
        if (isServer && params.slug) {
          let {data} = await axios.get(`v2/posts/?slug=${params.slug}`)
          commit('setCurrentPost', data[0])
        }
      }
    }
  })
}

export default createStore
