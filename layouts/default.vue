<template>
  <div id="app">
    <van-nav-bar>
      <div slot="left">
        <div class="logo">
          <router-link to="/">
            <img src="/images/logo-mobile.png" alt="Pojok Bogor" class="img-logo" width="150" scale="0">
          </router-link>
        </div>
      </div>
      <div slot="right">
        <div class="social fb">
          <a href="https://www.facebook.com/pojokbogor" target="_blank" rel="noopener" title="facebook" alt="facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg>
          </a>
        </div>
        <div class="social ig">
          <a href="https://www.instagram.com/pojok_bogor" target="_blank" rel="noopener" title="instagram" alt="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>
        <div class="social tw">
          <a href="https://twitter.com/PojokSatuBogor" target="_blank" rel="noopener" title="twitter" alt="twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
          </a>
        </div>
        <div class="social yt">
          <a href="https://www.youtube.com/c/PojokSatuIndonesia" target="_blank" rel="noopener" title="youtube" alt="youtube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"/></svg>
          </a>
        </div>
      </div>
    </van-nav-bar>
    <van-tabbar v-model="active2" class="tabbartop">
      <van-tabbar-item v-for="(tag,index) in tagMenus" :key="index" :to="{ name: 'topik-slug', params: { slug: tag.slug}}">
        {{tag.name}}
      </van-tabbar-item>
    </van-tabbar>

    <div class="main-content">
      <nuxt/>
    </div>
    <div class="main-footer">
      <van-goods-action>
        <van-goods-action-mini-btn icon="qr" text="Pojoksatu" href="http://pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Jabar" href="https://jabar.pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Bekasi" href="http://gobekasi.pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Sumut" href="http://sumut.pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Jogja" href="http://jogja.pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Bandung" href="http://bandung.pojoksatu.id" rel="noopener" target="_blank" />
        <van-goods-action-mini-btn icon="qr" text="Sulsel" href="http://sulsel.pojoksatu.id" rel="noopener" target="_blank" />
      </van-goods-action>

      <div class="meta">
        <div v-if="post && this.$route.name === 'baca-slug' ">
          <h1 v-html="post.title.rendered"></h1>
          <h2 v-html="postExcerpt"> </h2>
        </div>
        <div v-if="this.$route.name === 'index' ">
          <h1>Pojokbogor.com</h1>
          <h2>Berita dan kabar pilihan terkini serta terbaru seputar peristiwa, kuliner, belanja, dan wisata di Bogor.</h2>
        </div>
      </div>
    </div>
    <no-ssr>
      <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=1878460509132439&ev=PageView&noscript=1"/>
        <img src="https://certify.alexametrics.com/atrk.gif?account=3v1Hk1ao6C52WR" style="display:none" height="1" width="1" alt="" />
      </noscript>
    </no-ssr>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">
          Terkini
      </van-tabbar-item>
      <van-tabbar-item icon="upgrade" :to="{ name: 'populer' }">
        Populer
      </van-tabbar-item>
      <van-tabbar-item icon="play" :to="{ name: 'video' }">
        Video
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  NavBar,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Icon,
  GoodsAction,
  GoodsActionMiniBtn } from 'vant'

export default {
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data({ isMobile }) {
    return {
      //fbpixel: "<img height='1' width='1' src='https://www.facebook.com/tr?id=1878460509132439&ev=PageView&noscript=1'/>",
      active: 0,
      active2: 0,
      tagMenus: [],
      isMobile
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getActiveMenu'
  },
  created: function () {
    this.getActiveMenu()
  },
  computed: {
    post () {
      return this.$store.state.post
    },
    postExcerpt () {
      if ( this.post.excerpt.rendered.substring(0, 13) === '<p>POJOKJABAR' ) {
        return this.post.excerpt.rendered.substring(19, 180)
      } else {
        return this.post.excerpt.rendered.substring(3, 170)
      }
    }
  },
  methods: {
    getActiveMenu() {
      //console.log(this.$route.name)
      this.active2 = null
      if (this.$route.name === 'index') {
        this.active = 0
      }
      else if (this.$route.name === 'populer') {
        this.active = 1
      }
      else if (this.$route.name === 'video') {
        this.active = 2
      }
      else if (this.$route.name === 'topik-slug') {
        this.active = null
        if ( this.$route.params.slug === 'kota-bogor' ) {
          this.active2 = 0
        }
        if ( this.$route.params.slug === 'kabupaten-bogor' ) {
          this.active2 = 1
        }
        if ( this.$route.params.slug === 'wisata-bogor' ) {
          this.active2 = 2
        }
        if ( this.$route.params.slug === 'pilkada-2018' ) {
          this.active2 = 3
        }
        if ( this.$route.params.slug === 'belanja' ) {
          this.active2 = 4
        }
      }
      else {
        this.active = null
      }
      if ( !this.$isServer && localStorage.getItem('topiks') ) {
        this.tagMenus = JSON.parse(localStorage.getItem('topiks'))
      }
      else {
        this.$axios.get('https://jabar.pojoksatu.id/wp-json/bogor/v1/topik')
          .then(response => {
            var vd = response.data
            // JSON responses are automatically parsed.
            if (vd) {
              if ( !this.$isServer ) {
                localStorage.setItem('topiks', JSON.stringify(vd))
              }
              this.tagMenus = vd
            }
          })
      }
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  line-height: 26px;
}
.van-goods-action__mini-btn {
  min-width: 14.2%;
}
.van-cell__title .van-icon {
  font-size: 18px;
}
h1 {
  font-size: 16px;
  margin-bottom: -40px;
}
h2 {
  font-size: 16px !important;
  line-height: 10px;
}
.social {
  width: 20px;
  line-height: 30px;
  float: left;
  margin-left: 10px;
  color: #999;
}
.social a {
  color: #999;
}
</style>
