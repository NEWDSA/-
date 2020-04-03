<template>
    <div>
        Center
    </div>
</template>
<script>
export default {
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
