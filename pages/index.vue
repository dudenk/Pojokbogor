<template id="Home">
  <div>
    <section id="featured-section-1" class="featured-section featured-section-1-1 clearfix">
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
              <h2 class="slidertitle" itemprop="headline"><router-link :to="{ name: 'baca-slug', params: { slug: hl.slug }}" v-html="hl.title"> </router-link></h2>
            </div>
          </van-swipe-item>
        </van-swipe>
      </async-content>
    </section>
    <section id="latest-posts" class="clearfix">
      <van-nav-bar title="Berita Terkini" />
      <async-content :loaded="postLoader.pages[0].loaded">
        <div v-for="(post,index) of postLoader.pages[0].content" :key="index" >
          <article class="list horizontal" itemscope="" itemtype="http://schema.org/NewsArticle">
            <post-summary imgSize="thumbnail" :post="post" class="post-summary"></post-summary>
          </article>
          <div class="clear clearfix"> </div>
          <div v-if="index == 4" style="margin-bottom:150px;" class="clearfix" >

          </div>
        </div>
      </async-content>
    </section>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'
import asyncContent from '~/components/async-content.vue'
import postSummary from '~/components/post-summary.vue'
import { NavBar, Swipe, SwipeItem } from 'vant'

export default {
  name: 'Home',
  mixins: [wpMixin],
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    asyncContent,
    postSummary
  },
  data () {
    return {
      // queryParams can contain any query paramater key and value defined by the WP REST API
      postLoader: this.createWpLoader('https://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        // embed: false,
        queryParams: ['categories=6', 'per_page=20']
      }),
      headlineLoader: this.createWpLoader('https://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        // embed: false,
        queryParams: ['categories=6', 'per_page=3', 'filter[meta_key]=headline', 'filter[meta_value]=1']
      })
    }
  },
  head () {
    return {
      title: 'Berita dan kabar pilihan',
      meta: [
        { hid: 'description', name: 'description', content: 'Berita dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.' }
      ]
    }
  },
  methods: {
    postDate2: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).startOf('minutes').fromNow()
    }
  }
}
</script>
<style>
</style>
