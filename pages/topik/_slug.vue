<template>
  <div>
    <section v-if="headlineLoader" id="featured-section-1" class="featured-section featured-section-1-1 clearfix">
      <async-content :loaded="headlineLoader.pages[0].loaded">
        <van-swipe>
          <van-swipe-item v-for="(hl,index) of headlineLoader.pages[0].content" :key="index" >
            <div class="slideImg">
              <img :src="hl.imgSrcMedium" />
            </div>
            <div class="flex-caption">
              <div class="sliderdate">
                <span class="thetime text" itemprop="datePublished" :content="hl.date">{{ postDate2(hl.date) }}</span>
              </div>
              <h2 class="slidertitle" itemprop="headline"><router-link :to="{ name: 'baca-slug', params: { slug: hl.slug }}" v-html="hl.title"></router-link></h2>
            </div>
          </van-swipe-item>
        </van-swipe>
      </async-content>
    </section>
    <section v-if="postLoader" id="latest-posts" class="clearfix">
      <van-nav-bar :title="dataTags.name" />
      <div v-for="(page,index) of postLoader.pages" :key="index">
        <async-content :loaded="page.loaded">
          <div v-for="(post,i) of page.content" :key="i" >
            <article class="list" itemscope="" itemtype="http://schema.org/NewsArticle">
              <post-summary imgSize="thumbnail" :post="post" class="post-summary"></post-summary>
            </article>
            <iframe v-if="i === 5"
              src="http://pojoksatu.pojokiklan.net/?wpproadszoneid=348"
              style="width: 100%; min-height: 90px; background:#fff; z-index:2"
            />
            <adsbygoogle v-if="i === 10" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 15" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
          </div>
        </async-content>
      </div>
      <div class="tombol">
        <van-button @click="postLoader.loadPage()" type="primary" size="large">Berita Lain</van-button>
      </div>
    </section>
    <section v-if="error" class="error">
      <van-notice-bar
        :text="error"
      />
    </section>
  </div>
</template>

<script>

import axios from 'axios'
import wpMixin from '~/plugins/wp-mixin'
import asyncContent from '~/components/async-content.vue'
import postSummary from '~/components/post-summary.vue'

import { NavBar, NoticeBar, Swipe, SwipeItem, Button  } from 'vant';

export default {
  name: 'Topik',
  mixins: [wpMixin],
  components: {
    asyncContent,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    postSummary
  },
  async fetch (vm) {
    //console.log(vm)
    vm.store.dispatch('getTag', vm.params.slug)
    //let { data } = await vm.$axios.get('http://jabar.pojoksatu.id/wp-json/wp/v2/tags/?slug=' + vm.params.slug)
    //vm.store.commit('setCurrentTag', data)
    //console.log (data)
  },
  computed: {
    dataTags () {
      this.getPostLoader(this.$store.state.tag)
      return this.$store.state.tag
    }
  },
  data () {
    return {
      error: null,
      //dataTags: {},
      // queryParams can contain any query paramater key and value defined by the WP REST API
      postLoader: null,
      headlineLoader: null
    }
  },
  watch: {
    // call again the method if the route changes
    // '$route': 'setData'
  }, /*
  beforeRouteEnter (to, from, next) {
    axios.get('https://jabar.pojoksatu.id/wp-json/wp/v2/tags/?slug=' + to.params.slug)
      .then(json => {
        //console.log(json)
        next(vm => vm.getPostLoader(json.data[0]))
      })
  },
  beforeRouteUpdate (to, from, next) {
    axios.get('https://jabar.pojoksatu.id/wp-json/wp/v2/tags/?slug=' + to.params.slug)
      .then(json => {
        //console.log(this)
        this.getPostLoader(json.data[0])
        next()
      })
  }, */
  /*beforeCreate: function (to) {
    axios.get('http://jabar.pojoksatu.id/wp-json/wp/v2/tags/?slug=' + this.$route.params.slug)
      .then(json => {
        //console.log(this)
        this.setData(json.data[0])
      })
  },*/
  head () {
    return {
      title: this.dataTags.name,
      meta: [
        { hid: 'description', name: 'description', content: 'Berita dan kabar pilihan terkini seputar' + this.dataTags.name + ' di bogor '}
      ]
    }
  },
  methods: {
    /*setData (tags) {
      if (tags) {
        this.error = null
        this.dataTags = tags
        this.getPostLoader(tags)
      } else {
        this.postLoader = this.headlineLoader = null
        this.error = 'Content tidak ditemukan'
      }
    }, */
    postDate2: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).startOf('minutes').fromNow()
    },
    getPostLoader (tags) {
      this.postLoader = this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        // embed: false,
        queryParams: ['categories=6', 'per_page=20', 'tags=' + tags.id]
      })
      this.headlineLoader = this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        // embed: false,
        queryParams: ['categories=6', 'per_page=3', 'filter[meta_key]=headline', 'filter[meta_value]=1', 'tags=' + tags.id]
      })
    }
  }
}
</script>
<style>
</style>
