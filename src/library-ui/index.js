import { Button, Form, Input, Icon } from 'ant-design-vue';
const ant = {
  install: function(Vue) {
    Vue.use(Button),
    Vue.use(Form),
    Vue.use(Input),
    Vue.use(Icon)
  }
}
export default ant