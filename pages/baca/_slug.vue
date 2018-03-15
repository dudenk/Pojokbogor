<template>
  <div>
    <div class="layout-padding row justify-center">
    <section class="container clearfix">
      <async-content :loaded="loaded">
        <article data-count="2-1" class="single" itemscope="" itemtype="http://schema.org/NewsArticle">
          <div class="single_post">
            <div class="breadcrumb">
            </div>
            <div class="single-header">
              <h1 class="title single-title" v-html="post.title.rendered"> </h1>
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
                      <div class="svg-icon">
                        <network network="facebook">
                          <svg class="svg-inline--fa fa-facebook fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>
                        </network>
                      </div>
                    </li>
                    <li class="social-icons__item">
                      <div class="svg-icon">
                        <network network="googleplus">
                          <svg class="svg-inline--fa fa-google-plus fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="google-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path></svg>
                        </network>
                      </div>
                    </li>
                    <li class="social-icons__item">
                      <div class="svg-icon">
                        <network network="twitter">
                          <svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </network>
                      </div>
                    </li>
                    <li class="social-icons__item">
                      <div class="svg-icon">
                        <network network="whatsapp">
                          <svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        </network>
                      </div>
                    </li>
                  </ul>
                </div>
              </social-sharing>
            </div>
            <div class="the-thumbnail">
              <img class="fullsingle" data-cfsrc="" :title="post.title.rendered" :alt="post.title.rendered" :src="post.featured_image_src" scale="0">
              <h2 class="wp-caption-text">{{ post.better_featured_image.caption }} </h2>
            </div>
            <div class="content">
              <div v-for="(content,p) of post.content.rendered.split('</p>')" :key="p">
                <div v-html="content"> </div>
                <div v-if="p === 1">
                  <adsbygoogle ad-slot="8596483357" ad-layout="in-article" ad-format="fluid" />
                </div>
              </div>
            </div>
            <div class="post_tag text">
              <router-link v-for="(tag,it) of theTags()" :key="it"  :to="{ name: 'topik-slug', params: { slug: tag.slug }, query: { id:tag.term_id }}">
                <van-tag plain mark type="primary">
                   #{{tag.name}}
                </van-tag>
              </router-link>
            </div>
            <adsbygoogle ad-slot="1364860599" ad-layout-key="-fe+69+39-ji+nt" ad-format="fluid" />
            <!-- <div class="fb-comments" :data-href="postUrl" data-numposts="5"></div> -->
          </div>
        </article>
      </async-content>
    </section>
    <section class="related" v-if="postLoader">
      <van-tabs>
        <van-tab title="Berita Terkait">
          <async-content :loaded="postLoader.loaded">
            <div v-for="(post,ip) of postLoader.content" :key="ip" >
              <article class="list">
                <post-sumnew :post="post" class="post-summary"></post-sumnew>
              </article>
            </div>
          </async-content>
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
import postSummary from '~/components/post-summary.vue'
import postSumnew from '~/components/post-sumnew.vue'
import { Icon, Tab, Tabs, Tag } from 'vant'

const Entities = require('html-entities').AllHtmlEntities;

export default {
  /* fetch ({ store, params }) {
    store.dispatch('getPost', params.slug)
  }, */
  async fetch (vm) {
    //console.log(vm)
    vm.store.dispatch('getPost', vm.params.slug)
    //let { data } = await vm.$axios.get('http://jabar.pojoksatu.id/wp-json/wp/v2/posts/?slug=' + vm.params.slug)
    //vm.store.commit('setCurrentPost', data)
    //console.log (data)
  },
  mixins: [wpMixin],
  components: {
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tag.name]: Tag,
    asyncContent,
    postSumnew,
    postSummary
  },
  computed: {
    post () {
      return this.$store.state.post
    },
    postUrl: function () {
      return 'http://bogor.pojoksatu.id/baca/' + this.post.slug
    },
    keyWords: function () {
      return 'Bogor,' + this.post.title.rendered.split(' ').slice(0,6)
    },
    jsonld () {
      var ajson = '{ "@context": "http://schema.org", "@type": "NewsArticle", "mainEntityOfPage": { "@type": "WebPage",  "@id": "https://google.com/article" },'
      ajson += '"headline": "' + this.post.title.rendered + '",'
      ajson += '"image": ["' + this.post.featured_image_src + '"],'
      ajson += '"datePublished": "' + this.post.date + '",'
      ajson += '"dateModified": "' + this.post.modified + '",'
      ajson += '"author": { "@type": "Person", "name": "' + this.post.authorname + '"},'
      ajson += '"publisher": { "@type": "Organization", "name": "Pojoksatu.id", "logo": { "@type": "ImageObject", "url": "http://pojoksatu.id/wp-content/uploads/2017/04/logo_dekstop.png" }},'
      ajson += '"description": "' + striptags(this.post.excerpt.rendered) + '"'
      ajson += '}'
      return ajson
    }
  },
  data () {
    return {
      // queryParams can contain any query paramater key and value defined by the WP REST API
      loaded: false,
      postLoader: null
    }
  },
  head () {
    return {
      title: Entities.decode(this.post.title.rendered),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: striptags(Entities.decode(this.post.excerpt.rendered))
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: this.keyWords
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: Entities.decode(this.post.title.rendered)
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
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
          content: striptags(Entities.decode(this.post.excerpt.rendered))
        }
      ],
      script: [
        { innerHTML: this.jsonld, type: 'application/ld+json' }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getRelated'
  },
  created: function () {
    this.getRelated()
  },
  methods: {
    getRelated () {
      this.$axios.get('http://jabar.pojoksatu.id/wp-json/bogor/v1/related/?slug=' + this.$route.params.slug)
        .then(response => {
          var vd = response.data
          // JSON responses are automatically parsed.
          if (vd) {
            this.postLoader = vd
          }
        })
    },
    postDate: function (theDate) {
      this.$moment.locale('id')
      return this.$moment(theDate).format('LLLL')
    },
    theTags: function() {
      var hasil = []
      var mentah = this.post.pure_taxonomies.tags
      for ( var index = 0; index < mentah.length; ++index) {
        var p = this.post.pure_taxonomies.tags[index]
        if (typeof p.name !== 'undefined'){
          hasil.push(p)
        }
      }
      return hasil
    },
    shareUrl: function (slug) {
      if (slug) {
        this.loaded = true
      }
      return this.postUrl
    }
  }
}
</script>
<style>
h1.entry-title {
  letter-spacing: normal;
  line-height: 25px;
  font-weight: 400;
}
.van-tag {
  font-size: 12px;
  margin:3px;
}
</style>
