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
  mounted () {
    console.log('swiper-mounted')
    /* eslint-disable no-new */
    new Swiper('.filemswiper', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
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
  .film-swiper-pagination{
    text-align: right;
  }
</style>
