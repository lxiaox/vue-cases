<template>
  <!-- 自定义 v-resize 指令， 监听浏览器窗口大小改变，并显示具体数据 -->

  <!-- 2. 可通过 参数 direction，选择监听页面高度 or 宽度的变化 -->

  <!-- 3. 可通过 修饰符 .quiet 来选择是否在 指令初始化的时候 调用onResize函数，即是否一进入窗口就显示实际宽高度 -->

  <div v-resize:[direction].quiet="onResize">
    window {{ direction === 'vertical' ? 'Height' : 'Width' }} is： {{ length }}
  </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('resize', {
  inserted(el, binding) {
    const callback = binding.value
    const direction = binding.arg
    const modifiers = binding.modifiers

    const result = () => {
      return direction === 'vertical' ? window.innerHeight : window.innerWidth
    }

    const onResize = () => callback(result())
    window.addEventListener('resize', onResize)

    //是否初始化显示窗口高度
    if (!modifiers || !modifiers.quiet) {
      onResize()
    }

    //自定义指令的钩子函数之间通过el共享数据
    el._onResize = onResize
  },
  unbind(el) {
    if (!el._onResize) return
    window.removeEventListener('resize', el._onResize)

    delete el._onResize
  },
})

export default {
  data() {
    return {
      // direction: 'horizontal',
      direction: 'vertical',
      length: 0,
    }
  },
  methods: {
    onResize(length) {
      this.length = length
    },
  },
}
</script>