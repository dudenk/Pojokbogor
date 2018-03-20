import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import axios from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      post: {},
      tag: {},
      topiks: [],
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
      },
      setTopiks: (state, topiks) => {
        state.topiks = topiks
      }
    },
    actions: {
      async getPosts ({commit, store}) {
        //console.log(store)
        let {data} = await axios.get(`wp/v2/posts/?slug=${store.state.tag.id}`)
        commit('setPosts', data)
      },
      async getPost ({commit, store}, slug) {
        let {data} = await axios.get(`wp/v2/posts/?slug=${slug}`)
        commit('setCurrentPost', data[0])
      },
      async getTag ({commit, store}, slug) {
        let {data} = await axios.get(`wp/v2/tags/?slug=${slug}`)
        commit('setCurrentTag', data[0])
      },
      async getTopiks ({commit}) {
        let {data} = await axios.get('bogor/v1/topik')
        console.log(data)
        commit('setTopiks', data)
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        if (isServer && route.name === 'index') {
          let {topiks} = await axios.get('bogor/v1/topik')
          console.log(topiks)
          commit('setTopiks', topiks)
        }
        if (isServer && route.name === 'topik') {
          let {data} = await axios.get(`wp/v2/posts/?slug=${store.state.tag.id}`)
          commit('setPosts', data)
        }
        if (isServer && route.name === 'topik-slug') {
          let {data} = await axios.get(`wp/v2/tags/?slug=${params.slug}`)
          commit('setCurrentTag', data[0])
        }
        if (isServer && params.slug) {
          let {data} = await axios.get(`wp/v2/posts/?slug=${params.slug}`)
          commit('setCurrentPost', data[0])
        }
      }
    }
  })
}

export default createStore
