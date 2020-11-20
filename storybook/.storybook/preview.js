import { addDecorator } from '@storybook/react';
import StylesDecorator from './styles-decorator';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(StylesDecorator);
addDecorator(withKnobs);