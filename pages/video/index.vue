<template>
  <div class="layout-padding row justify-center">
    <iframe
      src="http://pojoksatu.pojokiklan.net/?wpproadszoneid=306"
      style="width: 100%; height: 90px; background:#fff; z-index:2"
    />
    <section id="latest-posts" class="clearfix">
      <van-nav-bar title="Video" />
      <div class="clearfix" style="margin-top:-15px; z-index:0;">
        <div v-for="(post,index) of dataYoutube.items" :key="index" class="youtube-list"  >
            <van-row gutter="20" v-if="post" class="img" >
              <van-col span="24">
                <div class="post-img">
                  <a :href="videoURL(post.contentDetails.videoId)" title="post.snippet.title">
                    <div class="image-container" itemprop="image">
                      <img :src="post.snippet.thumbnails.medium.url" class="thumbnail" alt="" scale="0">
                    </div>
                  </a>
                </div>
              </van-col>
            </van-row>
            <van-row gutter="20" v-if="post" class="post-text" >
              <van-col span="20">
                <div class="post-info">
                  <span class="thetime updated" itemprop="datePublished" :content="post.snippet.publishedAt" style="display:block;">{{ postDate2(post.snippet.publishedAt) }}</span>
                </div>
                <h3 class="title post-title"> <a :href="videoURL(post.contentDetails.videoId)" v-html="post.snippet.title"></a> </h3>
              </van-col>
            </van-row>
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
  created: function () {
    this.$axios.get('https://www.googleapis.com/youtube/v3/playlistItems/?maxResults=25&playlistId=PL8OFoqLPiw0RxqptZSRzjBIuFbcucKD2e&part=snippet%2CcontentDetails&key=AIzaSyCbf791lc1Jo3P7R-atPrtadODDVORa8pk')
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
      console.log(this)
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
