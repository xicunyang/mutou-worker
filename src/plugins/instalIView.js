import Vue from 'vue'
import {
    Button,
    Table,
    Card,
    Icon,
    Form,
    FormItem,
    Slider,
    Input,
    Message,
    Steps,
    Step,
    Upload,
    Spin,
    Modal,
    Divider,
    Tabs,
    TabPane,
    BackTop,
} from 'view-design';

function installIView() {
    Vue.component('Button', Button);
    Vue.component('Table', Table);
    Vue.component('Card', Card);
    Vue.component('Icon', Icon);
    Vue.component('Form', Form);
    Vue.component('FormItem', FormItem);
    Vue.component('Slider', Slider);
    Vue.component('Input', Input);
    Vue.component('Steps', Steps);
    Vue.component('Step', Step);
    Vue.component('Upload', Upload);
    Vue.component('Spin', Spin);
    Vue.component('Modal', Modal);
    Vue.component('Divider', Divider);
    Vue.component('Tabs', Tabs);
    Vue.component('TabPane', TabPane);
    Vue.component('BackTop', BackTop);
    Vue.prototype.$Message = Message
}

export default installIView
