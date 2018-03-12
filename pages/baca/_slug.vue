<template>
  <div>
    <div class="layout-padding row justify-center">
    <section class="container clearfix" style="padding-top:10px;">
      <!-- <async-content :loaded="loaded"> -->
        <article data-count="2-1" class="single" itemscope="" itemtype="http://schema.org/NewsArticle">
          <div class="single_post">
            <div class="breadcrumb">
            </div>
            <header>
              <h1 class="title single-title entry-title" v-html="post.title.rendered" style="margin:0;"></h1>
              <div class="post-info">
                <span class="thetime updated text" itemprop="datePublished" :content="post.date">
                  <van-icon name="clock" style="vertical-align: text-top;" /> {{ postDate(post.date) }}
                </span>
                <span class="theauthor text">
                  <van-icon name="contact" />
                  <span v-if="post.authorname" itemprop="author" itemscope="" itemtype="http://schema.org/Person"><span itemprop="name"> {{ post.authorname }}</span></span>
                </span>
              </div>
              <social-sharing :url="shareUrl(post.slug)" inline-template>
                <div>

                  <ul class="social-icons">
                    <li class="social-icons__item">
                      <network network="facebook">
                        <i class="fab fa-facebook"></i>
                      </network>
                    </li>
                    <li class="social-icons__item">
                      <network network="googleplus">
                        <i class="fab fa-google-plus"></i>
                      </network>
                    </li>
                    <li class="social-icons__item">
                      <network network="twitter">
                        <i class="fab fa-twitter"></i>
                      </network>
                    </li>
                    <li class="social-icons__item">
                      <network network="whatsapp">
                        <i class="fab fa-whatsapp"></i>
                      </network>
                    </li>
                  </ul>
                </div>
              </social-sharing>
            </header>
            <div class="the-thumbnail">
              <img class="fullsingle" data-cfsrc="" :title="post.title.rendered" :alt="post.title.rendered" :src="post.featured_image_src" scale="0">
              <p class="wp-caption-text">{{ post.better_featured_image.caption }} </p>
            </div>
            <div class="content" v-html="post.content.rendered">
            </div>
            <div class="post_tag text" v-html="theTags()"></div>
          </div>
        </article>
      <!-- </async-content> -->
    </section>
    </div>
  </div>
</template>

<script>
import wpMixin from '~/plugins/wp-mixin'
import asyncContent from '~/components/async-content.vue'
import postSummary from '~/components/post-summary.vue'
import { Icon } from 'vant'

export default {
  mixins: [wpMixin],
  components: {
    [Icon.name]: Icon,
    asyncContent,
    postSummary
  },
  data () {
    return {
      // queryParams can contain any query paramater key and value defined by the WP REST API
      loaded: false,
      post: {
        authorname: '',
        title: {
          rendered: 'Judul berita'
        },
        excerpt: {},
        content: {},
        pure_taxonomies: {
          tags:[]
        },
        better_featured_image: {}
      }
    }
  },
  beforeCreate: function (to) {
    this.$axios.get('http://jabar.pojoksatu.id/wp-json/wp/v2/posts/?slug=' + this.$route.params.slug)
      .then(json => {
        //console.log(json.data[0])
        this.post = json.data[0]
        this.loaded = true
      })
  },
  head () {
    return {
      title: this.post.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt.rendered
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: this.keyWords
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title.rendered
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.postUrl
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.featured_image_src,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.excerpt.rendered
        }
      ]
    }
  },
  computed: {
    postUrl: function () {
      return 'http://bogor.pojoksatu.id/baca/' + this.post.slug
    },
    keyWords: function () {
      return this.post.title.rendered
    }
  },
  methods: {
    postDate: function (theDate) {
      this.loaded = true
      this.$moment.locale('id')
      return this.$moment(theDate).format('LLLL')
    },
    theTags: function() {
      var hasil
      var mentah = this.post.pure_taxonomies.tags
      for ( var index = 0; index < mentah.length; ++index) {
        var p = this.post.pure_taxonomies.tags[index]
        if (typeof p.name !== 'undefined'){
          hasil += p.name
        }
      }
      return hasil
    },
    shareUrl: function (slug) {
      return 'https://bogor.pojoksatu.id/baca/' + slug
    }
  }
}
</script>
<style>
#featured-section-1 {
  background: #fff;
  z-index: 3;
}
h1.entry-title {
  letter-spacing: normal;
  line-height: 25px;
  font-weight: 400;
}
</style>
