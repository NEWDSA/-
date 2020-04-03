<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src="data.poster"/>
                <h3>{{data.name}}</h3>
                <p>观众评分:{{data.grade}}</p>
                <p>主演:{{data.actors | actorfilter}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function (data) {
  var newlist = data.map(item => item.name) // 进行映射
  return newlist.join(' ') // 拆开
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5013636').then(res => {
    //   console.log(res.data.data)
    // })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5013636',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15856408991189705941043","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      console.log('wo shi fen ge fu')
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleChangePage (id) {
      console.log(id + '哈哈')
      // bian chen shi dao hang
      //   this.$router.push(`/detail/${id}`)
      this.$router.push({ name: 'kerwindetail', params: { id: id } })
    }
  }
}
</script>
<style lang="scss" scoped>
    ul{
      li{
        padding: 10px;
        overflow: hidden;
        img{
          float: left;
          width: 100px;
        }
      }
    }
</style>
