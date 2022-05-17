import React, { useState, useMemo } from 'react'
import Box from '../../atoms/box/box'
import Icon from '../../atoms/icon'
import { StyledSingleButton } from './button-group.styled'
import { ButtonInGroupProps } from './button-group.types'

export const SingleButtonInGroup: React.FC<ButtonInGroupProps> = (props) => {
  const { icon, label, buttons, source, onClick, ...buttonProps } = props
  const [loading, setLoading] = useState(false)

  const onClickHandler = onClick
    ? async (event) => {
      setLoading(true)
      await onClick(event, source)
      setLoading(false)
    }
    : undefined

  const iconName = useMemo(() => {
    if (loading) return 'Fade'

    return icon ?? ''
  }, [loading])

  return (
    <StyledSingleButton
      as="a"
      hasLabel={!!label}
      onClick={onClickHandler}
      {...buttonProps}
    >
      {!loading && !icon ? '' : <Icon key={iconName.toString()} icon={iconName} spin={loading} />}
      {label}
      {buttons && buttons.length && label ? (
        <Box as="span" mr="-8px" ml="md">
          <Icon icon="CaretDown" />
        </Box>
      ) : ''}
    </StyledSingleButton>
  )
}

export {
  SingleButtonInGroup as default,
}
