import { styled } from '@styled-components'

import { Text } from '../../atoms/text/index.js'

/**
 * @component
 * @private
 */
const FormMessage = styled(Text)`
  box-sizing: border-box;
  vertical-align: middle;
  height: ${({ theme }) => theme.space.xl};
  margin: ${({ theme }) => theme.space.sm} 0 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

FormMessage.displayName = 'FormMessage'

export default FormMessage
