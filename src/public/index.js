import Vue from 'vue'
import SvgIcons from '../components/svg-icons/SvgIcons'// svg组件

// register globally
Vue.component('svg-icon', SvgIcons)

const requireAll = requireContext => requireContext.keys().map(requireContext)

// eslint-disable-next-line no-undef
const req = require.context('./svg', false, /\.svg$/)

requireAll(req)
