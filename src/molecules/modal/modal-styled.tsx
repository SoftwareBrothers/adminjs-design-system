import { getValueAndUnit } from 'polished'
import styled from 'styled-components'
import { variant as styledVariant } from 'styled-system'
import { Box } from '../../atoms/box'
import { VariantType } from '../../theme'
import themeGet from '../../utils/theme-get'

const DEFAULT_WIDTH = 540
const VARIANT_BORDER_WIDTH = 8

const variantStyle = (color, props) => {
  const newPadding = getValueAndUnit(themeGet('space', 'xxl')(props))[0] - VARIANT_BORDER_WIDTH
  return {
    borderLeftWidth: VARIANT_BORDER_WIDTH,
    borderLeftStyle: 'solid',
    borderLeftColor: color,
    paddingLeft: newPadding,
  }
}

const variants = (props) => styledVariant<any, VariantType>({
  prop: 'variant',
  variants: {
    primary: variantStyle('primary100', props),
    danger: variantStyle('error', props),
    success: variantStyle('success', props),
    info: variantStyle('info', props),
    secondary: variantStyle('accent', props),
    light: variantStyle('grey60', props),
    default: {},
  },
})

const ModalStyled = styled(Box)`
  position: relative;
  & > .close-button {
    position: absolute;
    top: ${themeGet('space', 'md')};
    right: ${themeGet('space', 'md')};
  }
  & > .modal-label {
    margin-bottom: 0;
    margin-top: -${themeGet('space', 'xxl')};
    padding-top: ${themeGet('space', 'sm')};
  }
  ${(props): any => variants(props)};
`

ModalStyled.defaultProps = {
  pl: 'xxl',
  pr: 'xl',
  pt: 'x3',
  pb: 'xxl',
  bg: 'white',
  width: [1, DEFAULT_WIDTH],
}

export { ModalStyled, ModalStyled as default }
