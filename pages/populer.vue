<template>
  <div>
    <section v-if="beritaPopular" id="latest-posts" class="clearfix">
      <van-nav-bar title="Berita Populer" />

        <async-content :loaded="beritaPopular.loaded">
          <div v-for="(post,i) of beritaPopular.content" :key="i" >
            <article class="list" itemscope="" itemtype="http://schema.org/NewsArticle">
              <post-sumnew :post="post" class="post-populer"></post-sumnew>
            </article>
            <adsbygoogle v-if="i === 4" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 9" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 14" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 19" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
          </div>
        </async-content>

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
import postSumnew from '~/components/post-sumnew.vue'

import { NavBar, NoticeBar, Swipe, SwipeItem, Button  } from 'vant';

export default {
  name: 'Populer',
  mixins: [wpMixin],
  components: {
    asyncContent,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    postSumnew
  },
  async fetch (vm) {
    // vm.store.dispatch('getTag', vm.params.slug)
  },
  computed: {
    /* dataTags () {
      this.getPostLoader(this.$store.state.tag)
      return this.$store.state.tag
    } */
  },
  data () {
    return {
      error: null,
      beritaPopular: null
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getPopuler'
  },
  created: function () {
    this.getPopuler()
  },
  head () {
    return {
      title: 'Berita Populer',
      meta: [
        { hid: 'description', name: 'description', content: 'Berita populer dan kabar pilihan terkini seputar di bogor '}
      ]
    }
  },
  methods: {
    getPopuler () {
      this.$axios.get('https://jabar.pojoksatu.id/wp-json/bogor/v1/popular')
        .then(response => {
          var vd = response.data
          // JSON responses are automatically parsed.
          if (vd) {
            this.beritaPopular = vd
          }
        })
    },
    postDate2: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).startOf('minutes').fromNow()
    }
  }
}
</script>
<style>
</style>
