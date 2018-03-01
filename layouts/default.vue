<template>
  <div id="app">
    <van-nav-bar>
      <div slot="title">
        <router-link to="/">
          <img src="/images/logo-mobile.png" alt="Pojok Bogor" class="logo" width="150" height="31" scale="0">
        </router-link>
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

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">
          Home
      </van-tabbar-item>
      <van-tabbar-item icon="play" :to="{ name: 'video' }">
        Video
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs, Tabbar, TabbarItem, Icon } from 'vant'

export default {
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  },
  data() {
    return {
      active: 0,
      active2: 0,
      tagMenus: []
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getActiveMenu'
  },
  created: function () {
    this.getActiveMenu()
  },
  methods: {
    getActiveMenu() {
      if (this.$route.name === '/') {
        this.active = 0
      }
      else if (this.$route.name === 'video') {
        this.active = 1
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
        this.active2 = null
      }
      this.$axios.get('http://jabar.pojoksatu.id/wp-json/bogor/v1/topik')
        .then(response => {
          var vd = response.data
          // JSON responses are automatically parsed.
          if (vd) {
            this.tagMenus = vd
          }
        })
    }
  }
};
</script>

<style>
body {
  background-color: #fafafa;
}
img.logo {
  padding-top: 7px;
}
.tabbartop {
  position: absolute;
  top: 40px;
}
.van-cell__title .van-icon {
  font-size: 18px;
}
.main-content {
    padding-top: 40px;
    padding-bottom: 60px;
}
</style>
