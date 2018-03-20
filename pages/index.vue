<template id="Home">
  <div>
    <section id="featured-section-1" class="featured-section featured-section-1-1 clearfix">
      <async-content :loaded="headlineLoader.pages[0].loaded">
        <van-swipe>
          <van-swipe-item v-for="(hl,index) of headlineLoader.pages[0].content" :key="index" >
            <div class="slideImg">
              <img v-lazy="imageSource(hl.imgSrcMedium)" :alt="hl.title"/>
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
      <div v-for="(page,index) of postLoader.pages" :key="index">
        <async-content :loaded="page.loaded">
          <div v-for="(post,i) of page.content" :key="i" >
            <article class="list horizontal" itemscope="" itemtype="http://schema.org/NewsArticle">
              <post-summary imgSize="thumbnail" :post="post" class="post-summary"></post-summary>
            </article>
            <div class="clear clearfix"> </div>
            <!-- <iframe id="iklan" name="pojokiklan" title="Pojok Iklan" v-if="index === 0 && i === 5"
              src="http://pojoksatu.pojokiklan.net/?wpproadszoneid=348"
              style="width: 100%; height: 90px; background:#fff; z-index:2"
            /> -->
            <adsbygoogle v-if="i === 4" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 9" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="i === 14" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
          </div>
        </async-content>
      </div>
      <div class="tombol">
        <van-button @click="postLoader.loadPage()" type="primary" size="large">Berita Lain</van-button>
      </div>
    </section>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'
import asyncContent from '~/components/async-content.vue'
import postSummary from '~/components/post-summary.vue'
import { NavBar, Swipe, SwipeItem, Button } from 'vant'

export default {
  name: 'Home',
  mixins: [wpMixin],
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    asyncContent,
    postSummary
  },
  data () {
    return {
      // queryParams can contain any query paramater key and value defined by the WP REST API
      postLoader: this.createWpLoader('https://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        embed: false,
        queryParams: ['categories=6', 'per_page=20']
      }),
      headlineLoader: this.createWpLoader('https://jabar.pojoksatu.id/wp-json/wp/v2/posts', {
        embed: false,
        queryParams: ['categories=6', 'per_page=3', 'filter[meta_key]=headline', 'filter[meta_value]=1']
      })
    }
  },
  head () {
    return {
      title: 'Berita dan kabar pilihan',
      meta: [
        { hid: 'description', name: 'description', content: 'Berita dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.' }
      ],
      script: [
        { innerHTML: '{"@context":"http://schema.org","@type":"WebSite","url":"https://bogor.pojoksatu.id"}', type: 'application/ld+json' }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  methods: {
    imageSource (src) {
      return 'https' + src.substring(4)
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
