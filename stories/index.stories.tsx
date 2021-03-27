import React, { FC, useContext } from 'react';
import { Meta, Story } from '@storybook/react';
import { useContextWithSetter } from '../src';

const Example: FC = () => {
  const context = useContextWithSetter(0);
  const [num, setNum] = useContext(context);
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
};

const meta: Meta = {
  title: 'Welcome',
};

export default meta;

const Template: Story = args => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
