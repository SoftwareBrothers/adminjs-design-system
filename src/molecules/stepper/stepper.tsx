import { styled } from '@styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { cssClass } from '../../utils/css-class.js'

/**
 * @classdesc
 *
 * <img src="components/stepper.png" />
 *
 * It provides wizard workflow where user can go through a couple of steps.
 * Stepper makes sense when you use it along with {@link Step} component.
 *
 * It receives all the same props as {@link Box} - {@link BoxProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Stepper, StepperProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-stepper--clickable-steps Storybook}
 * @example <caption>Clickable steps</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
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
 *     </Stepper>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
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
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
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
 * return (<ComponentWithStepper />)
 *
 * @section design-system
 */
const Stepper = styled(Box)<BoxProps>`
`

Stepper.defaultProps = {
  flex: true,
  flexDirection: ['column', 'row'],
  borderBottom: '1px solid',
  borderBottomColor: 'separator',
  className: cssClass('Stepper'),
}

export { Stepper }
export default Stepper
