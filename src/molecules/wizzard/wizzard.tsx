import styled from 'styled-components'
import Box from '../../atoms/box/box'
import { cssClass } from '../../utils/css-class'

/**
 * @classdesc
 *
 * <img src="components/wizzard.png" />
 *
 * It provides wizard workflow where user can go through a couple of steps.
 * wizzard makes sense when you use it along with {@link Step} component.
 *
 * It receives all the same props as {@link Box} - {@link BoxProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { wizzard, wizzardProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-wizzard--clickable-steps Storybook}
 * @example <caption>Clickable steps</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithwizzard = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Wizzard>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          onClick={setCurrentStep}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Wizzard>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithwizzard />)
 *
 * @example <caption>Steps with bottom navigation</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithWizzard = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Wizzard>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Wizzard>
 *     <Box mt="xl">
 *       <Button
 *         disabled={currentStep === 1}
 *         mr="default"
 *         onClick={() => setCurrentStep(currentStep - 1)}
 *       >
 *         Previous Step
 *       </Button>
 *       <Button
 *         disabled={currentStep === 3}
 *         variant="primary"
 *         onClick={() => setCurrentStep(currentStep + 1)}
 *       >
 *         Next Step
 *       </Button>
 *     </Box>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithWizzard />)
 *
 * @section design-system
 */
const Wizzard = styled(Box)`
`

Wizzard.defaultProps = {
  flex: true,
  flexDirection: ['column', 'row'],
  className: cssClass('wizzard'),
  width: '100%',
}

export { Wizzard }
export default Wizzard
