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
      populerposts: {},
      posts: []
    },
    //plugins: [createPersistedState()],
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setPopulerPosts: (state, populerposts) => {
        state.populerposts = populerposts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      },
      setCurrentTag: (state, tag) => {
        state.tag = tag
      }
    },
    actions: {
      async getPosts (vm) {
        //let {data} = await axios.get(`wp/v2/posts/?categories=6&per_page=20&tags=` + vm.state.tag.id )
        //vm.commit('setPosts', data[0])
      },
      async getPopulerPosts (vm) {
        let {data} = await axios.get('bogor/v1/popular')
        //console.log(data)
        vm.commit('setPopulerPosts', data)
      },
      async getPost ({commit, store}, slug) {
        let {data} = await axios.get(`wp/v2/posts/?slug=${slug}`)
        commit('setCurrentPost', data[0])
      },
      async getTag ({commit, store}, slug) {
        let {data} = await axios.get(`wp/v2/tags/?slug=${slug}`)
        commit('setCurrentTag', data[0])
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        if (isServer && route.name === 'topik-slug') {
          let {data} = await axios.get(`wp/v2/tags/?slug=${params.slug}`)
          commit('setCurrentTag', data[0])
        }
        if (isServer && route.name === 'populer') {
          let {data} = await axios.get('bogor/v1/popular')
          commit('setPopulerPosts', data)
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
