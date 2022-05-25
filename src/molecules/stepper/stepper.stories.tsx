import React, { useState, SetStateAction } from 'react'
import { Box, Stepper, Step, Button } from '../..'

const steps = [{
  number: 1, label: 'Do this first',
}, {
  number: 2, label: "Don't forget this",
}, {
  number: 3, label: 'And finally this',
}]

export const clickableSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Stepper>
      {steps.map(({ number, label }) => (
        <Step
          key={number}
          active={currentStep === number}
          completed={currentStep > number}
          onClick={(idx?: number | string) => setCurrentStep(idx as SetStateAction<number>)}
          number={number}
        >
          {label}
        </Step>
      ))}
    </Stepper>
  )
}

export const stepsWithBottomNavigation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Box>
      <Stepper>
        {steps.map(({ number, label }) => (
          <Step
            key={number}
            active={currentStep === number}
            completed={currentStep > number}
            onClick={(idx?: number | string) => setCurrentStep(idx as SetStateAction<number>)}
            number={number}
          >
            {label}
          </Step>
        ))}
      </Stepper>
      <Box mt="xl">
        <Button
          disabled={currentStep === 1}
          mr="default"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Previous Step
        </Button>
        <Button
          disabled={currentStep === 3}
          variant="primary"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  )
}

export default {
  title: 'DesignSystem/Molecules/Stepper',
}
