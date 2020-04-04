import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义的共享状态
    isTabbarshow: true,
    commingList: []

  },
  mutations: { // 唯一修改状态的位置
    HideMaizuoTabbar (state, data) {
      console.log('HideMaizuoTabbar' + data)
      state.isTabbarshow = data
    },
    ShowMaizuoTabbar (state, data) {
      state.isTabbarshow = data
      console.log('ShowMaizuoTabbar' + data)
    },
    comingListMutation (state, data) {
      state.commingList = data
    }
  },
  actions: {
    // 异步处理
    getComingListAction (store) {
      Axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=492530',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15856408991189705941043","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {}
})
