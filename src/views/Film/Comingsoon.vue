<template>
    <div>
   <ul>
        <li v-for="data in $store.getters.comingListGetter" :key="data.filmId">
             <img :src="data.poster"/>
             <h3>{{data.name}}</h3>
             <p>观众评分:{{data.grade}}</p>
             <p>主演:{{data.actors | actorfilter}}</p>
         </li>
        </ul>
    </div>
</template>
<script>
export default {
  mounted () {
    if (this.$store.state.commingList.length === 0) {
      // ajax请求
      this.$store.dispatch('getComingListAction') // dispatch 分发、触发
    } else {
      console.log('使用缓存数据')
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
