import React, { useState, FC, useContext } from 'react';
import { Meta, Story } from '@storybook/react';
import { createContextWithSetter } from '../src';

const NumContext = createContextWithSetter(0);

const Child: FC = () => {
  const [num, setNum] = useContext(NumContext);
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
};

const Root: FC = () => {
  const numState = useState(0);
  return (
    <NumContext.Provider value={numState}>
      <Child />
    </NumContext.Provider>
  );
};

const meta: Meta = {
  title: 'Welcome',
};

export default meta;

const Template: Story = args => <Root {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
