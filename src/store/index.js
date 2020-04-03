import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 定义的共享状态
        isTabbarshow: true
    },
    mutations: { // 唯一修改状态的位置
        HideMaizuoTabbar(state, data) {
            console.log('HideMaizuoTabbar' + data)
            state.isTabbarshow = data
        },
        ShowMaizuoTabbar(state, data) {
            state.isTabbarshow = data
            console.log('ShowMaizuoTabbar' + data)
        }
    },
    actions: {},
    modules: {}
})