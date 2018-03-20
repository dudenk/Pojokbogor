<template>
  <div v-if="beritaKabBogor" class="framebogor">
    <div class="framtitle">Kab. Bogor</div>
    <van-swipe>
      <van-swipe-item v-for="(post, index) of beritaKabBogor.pages[0].content.data" :key="index" >
        <div class="slideImg">
          <img :src="post.gambar" :alt="post.title"/>
        </div>
        <div class="flex-caption">
          <h3 class="slidertitle" itemprop="headline">
            <a :href="post.link" target="_blank">
              {{ post.title }}
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
      beritaKabBogor: this.createMyRequest('https://jabar.pojoksatu.id/wp-json/bogor/v1/kab_bogor', {
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
  border: 2px solid #39cd00;
}
.framtitle {
  background: #29ba00;
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
