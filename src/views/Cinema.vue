<template>
    <div class="cinema" :style="mystyle">
        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                {{data.name}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    console.log(document.documentElement.clientHeight)
    this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2592548',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15856408991189705941043","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
    li{
        height: 50px;
    }
    .cinema{
        height:500px;
        overflow: hidden;
        position: relative;   //相对定位
    }
</style>
