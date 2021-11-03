<!-- 需要校验的组件 -->
<template>
  <input type="text" @blur="$emit('blur', value)" v-model="value" />
</template>

<script>
export default {
  props: ['initValue'],
  data() {
    return {
      value: this.initValue,
    }
  },
}
</script>
