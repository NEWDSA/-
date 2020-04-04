<template>
  <div>
    <tabbar v-show="isTabbarshow"></tabbar>
    <!--路由切换-->
    <router-view></router-view>
 </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex' // ES6导出方式
// import bus from '@/bus'
export default {
  data () {
    return {
      // isShow: true
    }
  },
  // mounted () {
  //   console.log(this.$store.state.isTabbarshow)
  // },

  // computed:mapState(['isTabbarshow']), //等价于 computed: { isTabbarshow (){ return true} }

  // mapState终极写法
  computed: {
    ...mapState(['isTabbarshow']) // ES6展开合并运算符
  },
  methods: {

  },
  components: {
    tabbar
  }
  // computed: {
  //   isShow () {
  //     return this.$store.state.isTabbarshow
  //   }
  // }
  // beforeMount () {
  //   bus.$on('maizuo', (data) => {
  //     // console.log('被通知了maizuo', data)  //$on 监听事件总线
  //     this.isShow = data
  //   })
  // }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  li{
    list-style: none;
  }
</style>
