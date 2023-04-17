import _styled from 'styled-components'

export * from 'styled-components'

export const styled = typeof _styled === 'function' ? _styled : _styled.default

export default styled
