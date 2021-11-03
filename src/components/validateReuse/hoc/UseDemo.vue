<!-- 使用validateInput组件 -->
<template>
  <div>
    <p>在输入框失焦时校验，输入数字</p>
    <div v-for="(item, $index) in lists" :key="$index">{{ item }}</div>
    <validate-input :rules="rules" />
  </div>
</template>

<script>
import CustomInput from './CustomInput'
import ValidateHoc from './hoc'
const ValidateInput = ValidateHoc(CustomInput)

export default {
  data() {
    return {
      lists: [1, 2, 3],
      rules: [
        {
          test: function (value) {
            return /\d+/.test(value)
          },
          message: '请输入一个数字',
        },
      ],
    }
  },
  components: {
    ValidateInput,
  },
}
</script>
