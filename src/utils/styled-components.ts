import * as _styled from 'styled-components'

export * from 'styled-components'

const defStyled = _styled.default ?? _styled
const styled = defStyled?.default ?? defStyled

export { styled }
export default styled
