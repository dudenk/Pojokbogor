<template>
  <div class="layout-padding row justify-center">
    <adsbygoogle ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
    <section id="latest-posts" class="clearfix">
      <van-nav-bar title="Video" />
      <div class="clearfix" style="margin-top:-15px; z-index:0;">
        <div v-for="(post,index) of dataYoutube.items" :key="index" class="youtube-list"  >
            <van-row gutter="20" v-if="post" class="img" >
              <van-col span="24">
                <div class="post-img">
                  <!-- <a :href="videoURL(post.contentDetails.videoId)" title="post.snippet.title">-->
                  <router-link :to="{ name: 'video-slug', params: { slug: post.contentDetails.videoId }}">
                    <div class="image-container" itemprop="image">
                      <img :src="post.snippet.thumbnails.medium.url" class="thumbnail" :alt="post.snippet.title" scale="0">
                    </div>
                  </router-link>
                  <!-- </a> -->
                </div>
              </van-col>
            </van-row>
            <van-row gutter="20" v-if="post" class="post-text" >
              <van-col span="20">
                <div class="post-info">
                  <span class="thetime updated" itemprop="datePublished" :content="post.contentDetails.videoPublishedAt" style="display:block;">{{ postDate2(post.contentDetails.videoPublishedAt) }}</span>
                </div>
                <h3 class="title post-title"> <router-link :to="{ name: 'video-slug', params: { slug: post.contentDetails.videoId }}" v-html="post.snippet.title"> </router-link> </h3>
              </van-col>
            </van-row>
            <adsbygoogle v-if="index === 1" ad-slot="3377560668" ad-layout-key="-8j+1y-dr+ea+fj" ad-format="fluid" />
            <adsbygoogle v-if="index === 6" ad-slot="3377560668" ad-layout-key="-8j+1y-dr+ea+fj" ad-format="fluid" />
            <adsbygoogle v-if="index === 11" ad-slot="3377560668" ad-layout-key="-8j+1y-dr+ea+fj" ad-format="fluid" />
            <adsbygoogle v-if="index === 16" ad-slot="3377560668" ad-layout-key="-8j+1y-dr+ea+fj" ad-format="fluid" />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'
import asyncContent from '~/components/async-content.vue'
import postSummary from '~/components/post-summary.vue'
import { Row, Col, NavBar, Swipe, SwipeItem } from 'vant'

export default {
  mixins: [wpMixin],
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    asyncContent,
    postSummary
  },
  data () {
    return {
      dataYoutube: {}
    }
  },
  head () {
    return {
      title: 'Video',
      meta: [
        { hid: 'description', name: 'description', content: 'Berita video dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.' }
      ]
    }
  },
  created: function () {
    this.$axios.get('https://www.googleapis.com/youtube/v3/playlistItems/?maxResults=25&playlistId=PL8OFoqLPiw0RxqptZSRzjBIuFbcucKD2e&part=snippet%2CcontentDetails&key=AIzaSyCcCSUTmmYXxKN0ClWABQBHhhulEpjUa1k')
      .then(response => {
        //console.log(response.data)
        this.dataYoutube = response.data
      })
  },
  methods: {
    postDate2: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).startOf('minutes').fromNow()
    },
    videoURL: function (videoId) {
      //console.log(this)
      //var youtubeUrl = this.$router.name;
      var youtubeUrl = 'https://www.youtube.com/watch?v=' + videoId + '&list=PL8OFoqLPiw0RxqptZSRzjBIuFbcucKD2e'
      return youtubeUrl
    }
  }
}
</script>
<style>
.youtube-list {

}
.youtube-list img {
  width: 100%;
}
.youtube-list .post-text {
  padding:10px 20px;
}

</style>
