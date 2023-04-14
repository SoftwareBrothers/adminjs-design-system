import ReactDatepicker from 'react-datepicker'
import * as FeatherIcons from 'react-feather'

import * as AdminJSDesignSystem from './build/index.js'
import * as styled from './build/utils/styled-components.js'

window.styled = window.styled || styled
if (!window.styled.styled && window.styled.default) {
  window.styled.styled = window.styled.default
}
window.ReactDatepicker = window.ReactDatepicker || ReactDatepicker.default || ReactDatepicker
window.FeatherIcons = window.FeatherIcons || FeatherIcons

export default AdminJSDesignSystem
