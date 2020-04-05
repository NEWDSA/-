import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义的共享状态
    isTabbarshow: true,
    commingList: []

  },
  getters: {
    // 處理原始狀態數據
    comingListGetter (state) {
      return state.commingList.filter((item, index) => index < 3) // ES5數組過濾方法 filter
    }
  },
  mutations: { // 唯一修改状态的位置
    [HIDE_TABBAR_MUTATION] (state, data) {
      console.log('HideMaizuoTabbar' + data)
      state.isTabbarshow = data
    },
    [SHOW_TABBAR_MUTATION] (state, data) {
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
