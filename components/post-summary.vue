<template>
  <van-row gutter="20" v-if="post" class="horizontal-container" >

    <van-col span="16">
      <div class="post-info">
        <span class="thecategory text" v-if="post.singleTag"><router-link :to="{ name: 'topik-slug', params: { slug: post.singleTag.slug}, query: { id:post.singleTag.id }}" v-html="post.singleTag.name"> </router-link></span>
        <span class="thetime text" itemprop="datePublished" :content="post.date" v-html="postDate"></span>
      </div>
      <h3 class="title post-title"><router-link :to="{ name: 'baca-slug', params: { slug: post.slug }}" v-html="post.title"> </router-link></h3>
    </van-col>
    <van-col span="8">
      <router-link :to="{ name: 'baca-slug', params: { slug: post.slug }}" :title="post.title">
        <div class="image-container" itemprop="image">
          <img width="110" v-lazy="imageSource" class="wp-post-image" alt="" scale="0">
        </div>
      </router-link>
    </van-col>

  </van-row>
</template>
<style></style>
<script>
import wpMixin from '~/plugins/wp-mixin'
import { Row, Col } from 'vant'

export default {
  mixins: [wpMixin],
  name: 'post-summary',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
  props: ['post', 'imgSize'],
  computed: {
    imageSource () {
      return 'https' + this.getImageSource(this.post, this.imgSize).substring(4)
    },
    postDate () {
      // console.log(this)
      this.$moment.locale('id')
      return this.$moment(this.post.date).startOf('minutes').fromNow()
    }
  }
}
</script>
