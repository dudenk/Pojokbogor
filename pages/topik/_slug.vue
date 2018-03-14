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
            <div v-if="index === 0 && i === 2 && KotaKab ">
              <kota-bogor v-if="KotaKab === 'kota-bogor'"> </kota-bogor>
              <kab-bogor v-if="KotaKab === 'kabupaten-bogor'"> </kab-bogor>
            </div>
            <iframe v-if="index === 0 && i === 5"
              src="http://pojoksatu.pojokiklan.net/?wpproadszoneid=348"
              style="width: 100%; height: 90px; background:#fff; z-index:2"
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
import kotaBogor from '~/components/kota-bogor.vue'
import kabBogor from '~/components/kab-bogor.vue'

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
    postSummary,
    kotaBogor,
    kabBogor
  },
  async fetch (vm) {
    vm.store.dispatch('getTag', vm.params.slug)
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
      postLoader: this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        queryParams: ['categories=6', 'per_page=20', 'tags=' + this.$store.state.tag.id]
      }),
      headlineLoader: this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        queryParams: ['categories=6', 'per_page=3', 'filter[meta_key]=headline', 'filter[meta_value]=1', 'tags=' + this.$store.state.tag.id]
      }),
      KotaKab: null
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'setData'
  },
  head () {
    return {
      title: this.dataTags.name,
      meta: [
        { hid: 'description', name: 'description', content: 'Berita dan kabar pilihan terkini seputar' + this.dataTags.name + ' di bogor '}
      ]
    }
  },
  created: function () {
    this.setData()
  },
  methods: {
    setData () {
      this.KotaKab = this.$route.params.slug
    },
    postDate2: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).startOf('minutes').fromNow()
    },
    getPostLoader (tags) {
      this.postLoader = this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        queryParams: ['categories=6', 'per_page=20', 'tags=' + tags.id]
      })
      this.headlineLoader = this.createWpLoader('http://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        queryParams: ['categories=6', 'per_page=3', 'filter[meta_key]=headline', 'filter[meta_value]=1', 'tags=' + tags.id]
      })
    }
  }
}
</script>
<style>
</style>
