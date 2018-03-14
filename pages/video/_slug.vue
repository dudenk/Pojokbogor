<template>
  <div>
    <div class="layout-padding row justify-center">
    <section class="container clearfix">
      <adsbygoogle ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
      <iframe id="player" type="text/html" width="100%" min-height="350px"
        :src="youtubeSrc()"
      frameborder="0"></iframe>
    </section>
    <section class="related">
      <van-tabs>
        <van-tab title="Video lain">
          <div v-for="(post,index) of dataYoutube.items" :key="index" class="youtube-list"  >
            <van-row gutter="20" v-if="post" class="img" >
              <van-col span="12">
                <div class="post-img">
                  <!-- <a :href="videoURL(post.contentDetails.videoId)" title="post.snippet.title">-->
                  <router-link :to="{ name: 'video-slug', params: { slug: post.contentDetails.videoId }}">
                    <div class="image-container" itemprop="image">
                      <img :src="post.snippet.thumbnails.medium.url" class="thumbnail" alt="" scale="0">
                    </div>
                  </router-link>
                  <!-- </a> -->
                </div>
              </van-col>
              <van-col span="12">
                <div class="post-info">
                  <span class="thetime updated" itemprop="datePublished" :content="post.snippet.publishedAt" style="display:block;">{{ postDate2(post.snippet.publishedAt) }}</span>
                </div>
                <h3 class="title post-title"> <router-link :to="{ name: 'video-slug', params: { slug: post.contentDetails.videoId }}" v-html="post.snippet.title"></router-link> </h3>
              </van-col>
            </van-row>
            <adsbygoogle v-if="index === 1" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <adsbygoogle v-if="index === 7" ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
          </div>
        </van-tab>

        <van-tab title="" disabled>
        </van-tab>

      </van-tabs>
    </section>
    </div>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'
import striptags from 'striptags'
import asyncContent from '~/components/async-content.vue'
import { Row, Col, Icon, Tab, Tabs, Tag } from 'vant'

export default {
  /* fetch ({ store, params }) {
    store.dispatch('getPost', params.slug)
  }, */
  async fetch (vm) {
    //console.log(vm)
    //vm.store.dispatch('getVideo', vm.params.slug)
    //let { data } = await vm.$axios.get('http://jabar.pojoksatu.id/wp-json/wp/v2/posts/?slug=' + vm.params.slug)
    //vm.store.commit('setCurrentPost', data)
    //console.log (data)
  },
  mixins: [wpMixin],
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tag.name]: Tag,
    asyncContent
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
    this.$axios.get('https://www.googleapis.com/youtube/v3/playlistItems/?maxResults=10&playlistId=PL8OFoqLPiw0RxqptZSRzjBIuFbcucKD2e&part=snippet%2CcontentDetails&key=AIzaSyCcCSUTmmYXxKN0ClWABQBHhhulEpjUa1k')
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
    youtubeSrc: function () {
      //console.log(this)
      //var youtubeUrl = this.$router.name;
      var youtubeUrl = 'http://www.youtube.com/embed/' + this.$route.params.slug
      return youtubeUrl
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
<style scoped>
iframe {
  min-height: 350px;
}
h1.entry-title {
  letter-spacing: normal;
  line-height: 25px;
  font-weight: 400;
}
.van-tag {
  font-size: 12px;
  margin:3px;
}
.youtube-list {
    margin: 5px 10px;
    padding: 5px 0;
    border-bottom: 1px solid #bbb;
}
</style>
