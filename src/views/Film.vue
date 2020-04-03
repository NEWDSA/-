<template>
  <div>
    <swiper :key="looplist.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannerId">
        <img :src="data.imgUrl" alt=""/>
      </div>
    </swiper>
    <filmheader :class="isFixed?'fixed':''"></filmheader>
    <router-view></router-view>
  </div>
</template>
<script>
import swiper from '@/views/Film/Swiper'
import filmheader from '@/views/Film/FilmHeader'
import axios from 'axios'
export default {
  data () {
    return {
      looplist: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    filmheader
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=440300&k=9712146',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15856408991189705941043","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      this.looplist = res.data.data
    })
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
      }
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>
<style lang="scss" scoped>

</style>
