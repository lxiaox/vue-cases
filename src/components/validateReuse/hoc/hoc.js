// 使用HOC模式实现一个公用的校验组件
// 本质是一个产生‘校验父组件’的函数

const ValidateHoc = Component => ({
  name: `hoc-${Component.name}`,
  props: ["rules"],
  data() {
    return {
      errMsg: "",
      value: ""
    };
  },
  methods: {
    validate(value) {
      this.value = value;
      let validate = this.rules.reduce((pre, cur) => {
        let check = cur && cur.test && cur.test(this.value);
        this.errMsg = check ? "" : cur.message;
        return pre && check;
      }, true);
      return validate;
    }
  },
  render() {
    return (
      <div>
        <Component on-blur={this.validate} initValue={this.value} />
        {this.errMsg || ""}
      </div>
    );
  }
});

export default ValidateHoc;
