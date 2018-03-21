<template>
  <div v-if="PDAMBogor" class="framebogor">
    <div class="framtitle">PDAM Bogor</div>
    <van-row gutter="0">
      <van-col span="12" v-for="(post, index) of PDAMBogor.pages[0].content.data" :key="index" class="posR" >
        <div class="boxImg">
          <img :src="post.gambar" :alt="post.judul"/>
        </div>
        <div class="flex-caption">
          <h3 class="slidertitle" itemprop="headline">
            <a :href="post.link" target="_blank">
              {{ post.title }}
            </a>
          </h3>
          <span class="text" v-html="postDate2(post.pubDate)"></span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'

import { Row, Col, Swipe, SwipeItem  } from 'vant';

export default {
  name: 'kota-bogor',
  mixins: [wpMixin],
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data () {
    return {
      error: null,
      PDAMBogor: this.createMyRequest('https://jabar.pojoksatu.id/wp-json/bogor/v1/pdam_bogor', {
        mapper: this.noMapper
      })
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
<style scoped>
.framebogor {
  border: 2px solid #82d9f5;
}
.framtitle {
  background: #00a3d7;
  color: #fff;
}
.posR {
  position: relative;
}
.boxImg {
    text-align: center;
    max-height: 150px;
    overflow: hidden;
}
h3.slidertitle {
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 16px;
  margin-bottom: 5px;
}

</style>
