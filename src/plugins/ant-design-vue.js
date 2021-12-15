import Vue from "vue";
import {
    notification,
    Layout,
    message,
    Button,
    Skeleton,
    // Icon,
    Cascader,
    // Dropdown,
    // Menu,
    Empty,
    Space,
    List,
    // Pagination,
    // Steps,
    // Checkbox,
    // DatePicker,
    Form,
    FormModel,
    Input,
    InputNumber,
    // Radio,
    Select,
    // TreeSelect,
    // Upload,
    Avatar,
    // Popover,
    // Table,
    Tabs,
    // Tag,
    // Timeline,
    Modal,
    // Popconfirm,
    Divider,
    Col,
    Row,
    // ConfigProvider
} from 'ant-design-vue';

import "ant-design-vue/dist/antd.css";
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;

Vue.use(Button)
    // .use(Icon)
    // .use(Dropdown)
    .use(Skeleton)
    .use(Cascader)
    // .use(Menu)
    .use(Empty)
    .use(Space)
    .use(List)
    // .use(Pagination)
    // .use(Steps)
    // .use(Checkbox)
    // .use(DatePicker)
    .use(Form)
    .use(FormModel)
    .use(Input)
    .use(InputNumber)
    // .use(Radio)
    .use(Select)
    // .use(TreeSelect)
    // .use(Upload)
    .use(Avatar)
    // .use(Popover)
    // .use(Table)
    .use(Tabs)
    // .use(Tag)
    // .use(Timeline)
    .use(Modal)
    // .use(Popconfirm)
    .use(Divider)
    .use(Col)
    .use(Row)
    // .use(ConfigProvider)
    .use(Layout);