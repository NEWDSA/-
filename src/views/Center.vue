<template>
  <div>
    Center
    <el-button size="small" :loading="true">使用按鈕</el-button>
    <el-radio v-model="radio" label="1">vue</el-radio>
    <el-radio v-model="radio" label="2">react</el-radio>
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('ju bu pan cha')
    const a = true
    if (a) {
      next()
    } else {
      next('/login')
    }
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  }
}
</script>
