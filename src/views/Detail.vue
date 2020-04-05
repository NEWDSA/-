<template>
    <div v-if='filminfo'>
        <img :src="filminfo.poster" alt="" class="poster"/>
        <h2>{{filminfo.name}}</h2>
        <h3>演职人员：</h3>
        <swiper preview="4" class="actorswiper" myclassname="actorswiper">
          <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
            <img :src="data.avatarAddress" alt=""/>
            <p>{{data.name}}</p>
          </div>
        </swiper>
        <h3>剧照</h3>
        <swiper preview="3" class="photoswiper" myclassname="photoswiper">
          <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
            <img :src="data" alt=""/>
          </div>
        </swiper>
    </div>
</template>
<script>
import swiper from './Detail/DetailSwiper'
import axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
// import bus from '@/bus'
export default {
  props: ['id'],
  data () {
    return {
      filminfo: null
    }
  },
  beforeMount () {
    // bus.$emit('maizuo', false) // 触发事件总线
    // this.$store.state.isTabbarShow=false;
    this.$store.commit(HIDE_TABBAR_MUTATION, false) // 第一个参数就是mutation的名字
    console.log('开始了')
  },
  mounted () {
    // console.log(this.$route.params.id, this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=6442036`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15856408991189705941043","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabbarShow=true;
    this.$store.commit(SHOW_TABBAR_MUTATION, true) // 第一个参数就是mutation的名字
    console.log('结束了')
  },
  components: {
    swiper
  }
}
</script>
<style lang="scss" scoped>
  .poster{
    width: 100%;
  }

</style>
