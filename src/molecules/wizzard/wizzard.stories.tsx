import React, { useState, SetStateAction } from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'
import { Box, Wizzard, WizzardStep, Button } from '../..'

export default { title: 'DesignSystem/Molecules/Wizzard', decorators: [withKnobs] }

const steps = [{
  number: 1, label: 'Intro', isCompleted: false
}, {
  number: 2, isCompleted: false
},  {
  number: 3, isCompleted: true
}, {
  number: 4, label: 'Finish', isCompleted: true
}]

export const clickableSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Wizzard>
      {steps.map(({ number, label, isCompleted }) => (
        <WizzardStep
          key={number}
          active={currentStep === number}
          completed={isCompleted}
          onClick={(idx?: number | string) => setCurrentStep(idx as SetStateAction<number>)}
          number={number}
        >
          {number}. {label ? label : 'Step'}
        </WizzardStep>
      ))}
    </Wizzard>
  )
}


export const clickableFinishedSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Wizzard>
      {steps.map(({ number, label, isCompleted }) => (
        <WizzardStep
          key={number}
          active={currentStep === number}
          completed={isCompleted}
          finished={true}
          onClick={(idx?: number | string) => setCurrentStep(idx as SetStateAction<number>)}
          number={number}
        >
           {number}. {label ? label : 'Step'}
        </WizzardStep>
      ))}
    </Wizzard>
  )
}