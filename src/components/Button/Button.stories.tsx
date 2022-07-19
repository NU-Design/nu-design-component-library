import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
);

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType="primary"> Primary Button </Button>
    <Button btnType="danger"> Danger Button </Button>
    <Button btnType="link" href="https://google.com">
      {' '}
      Link Button{' '}
    </Button>
  </>
);
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('Button of Different Sizes', buttonWithSize)
  .add('Button of Different Types', buttonWithType);
