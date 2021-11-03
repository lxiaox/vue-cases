<!-- 使用s-validate组件 -->
<template>
  <div>
    <s-validate #default="{ validate }" :value="inputValue" :rules="inputRules">
      <input type="text" @blur="validate" v-model="inputValue" />
    </s-validate>

    <s-validate #default="{ validate }" :value="text" :rules="textRules">
      <textarea type="text" @blur="validate" v-model="text" />
    </s-validate>
  </div>
</template>

<script>
import SValidate from './SValidate'

export default {
  data: () => ({
    inputValue: 'hi',
    text: 'hi',
    inputRules: [
      {
        test: function (value) {
          return /\d+$/.test(value)
        },
        message: '请输入数字',
      },
    ],
    textRules: [
      {
        test: function (value) {
          return value.trim()
        },
        message: '请输入一个非空的值',
      },
    ],
  }),
  components: {
    SValidate,
  },
}
</script>

<style scoped>
div {
  margin-top: 30px;
}
</style>