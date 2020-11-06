import React from 'react'
import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'
import Icon from '../../atoms/icon'
import Text from '../../atoms/text'
import Box from '../../atoms/box/box'
import { cssClass } from '../../utils/css-class'


/**
 * Handler which is invoked when user clicks given step
 *
 * @alias OnWizzardStepClickHandler
 * @memberof Step
 */
export type OnWizzardStepClickHandler = (
  /**
   * The same number what was passed to a {@link WizzardStep}
   */
  number?: number | string
) => boolean | void


/**
 * @alias WizzardStepProps
 * @memberof WizzardStep
 */
export type WizzardStepProps = {
  /** number of step */
  number?: number | string;
  /** indicates if given WizzardStep is done */
  completed?: boolean;
  /** indicates if given WizzardStep is active */
  active?: boolean;
  /** turn off any  */
  disabled?: boolean;
  /** handler which passes a number of the WizzardStep in an argument */
  onClick?: OnWizzardStepClickHandler;
  finished?: boolean;
  /** Optional className */
  className?: string;
}



const Circle = styled(Box)`
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  text-align: center;

  svg {
    width: 12px;
    height: 12px;
  }
`

Circle.defaultProps = {
  py: '0px',
  px: '0px',
  minWidth: '18px',
  minHeight: '18px',
}

type StyledWizzardStepProps = SpaceProps & Pick<WizzardStepProps, 'active' | 'disabled' | 'completed'>

const StyledWizzardStep = styled.div<StyledWizzardStepProps>`
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;
  margin: 0 4px;
  

  & > ${Box} {
    ${({ disabled }): string => (!disabled ? 'cursor: pointer' : '')};
    background-color: ${({ active, theme, completed }): string => (
      active ? 
        theme.colors.primary100 : 
        (completed ? theme.colors.visited : theme.colors.notVisited))};
    width: 100%;
    height: 34px;
    padding: 0;
    border-radius: 4px;
  }
  
  ${space};
`
const WizzardStep: React.FC<WizzardStepProps> = (props) => {
  const { number, completed, children, active, finished, disabled, onClick, className } = props

  return (
    <StyledWizzardStep
      active={active}
      disabled={disabled || !onClick}
      className={cssClass('WizzardStep', className)}
    >
      <Box
        flexShrink={1}
        flexGrow={0}
        flex
        flexDirection="row"
        pt="lg"
        pb="default"
        onClick={(): boolean | void => !disabled && onClick && onClick(number)}
      >
        <Text mx="lg"  my="sm" pl="default" py="sm" color={active ? 'white' : 'grey100'} width="100%">
          {children}
        </Text>
        {!finished && (
            <Circle
            bg={completed ? 'primary100' : 'transparent'}
            borderColor='grey40'
            color={active ? 'white' : 'primary100'}
            my="default"
            mx="lg"
            >
            {completed ? (
              <Icon icon="Checkmark" color="white" />
            ) : ''}
            </Circle>
        )}
       
      </Box>
    </StyledWizzardStep>
  )
}

export { WizzardStep }
export default WizzardStep
