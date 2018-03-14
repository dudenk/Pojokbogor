<template>
  <div v-if="beritaKotaBogor" class="framebogor">
    <div class="framtitle">Kota Bogor</div>
    <van-swipe>
      <van-swipe-item v-for="(post, index) of beritaKotaBogor.pages[0].content.data" :key="index" >
        <div class="slideImg">
          <img :src="post.gambar" />
        </div>
        <div class="flex-caption">
          <h3 class="slidertitle" itemprop="headline">
            <a :href="post.link" target="_blank">
              {{ post.judul }}
            </a>
          </h3>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'

import { Swipe, SwipeItem  } from 'vant';

export default {
  name: 'kota-bogor',
  mixins: [wpMixin],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data () {
    return {
      error: null,
      beritaKotaBogor: this.createMyRequest('http://jabar.pojoksatu.id/wp-json/bogor/v1/kota_bogor', {
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
.slideImg {
  max-height: 160px;
}
h3.slidertitle {
  font-size: 18px;
  letter-spacing: 0.5px;
}

</style>
