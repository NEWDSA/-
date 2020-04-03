<template>
  <div class="swiper-container filemswiper">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper' // js文件
import 'swiper/css/swiper.min.css'
export default {
  props: ['preview', 'myclassname'],
  mounted () {
    console.log('swiper-mounted')
    console.log(this.preview)
    /* eslint-disable no-new */
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.preview,
      spaceBetween: this.myclassname === 'actorsswiper' ? 20 : 10,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
</style>
