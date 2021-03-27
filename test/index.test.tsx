import React from 'react';
import { render, findByText } from '@testing-library/react';

import { Default as Example } from '../stories/index.stories';

describe('Thing', () => {
  it('renders without crashing', async done => {
    const { container } = render(<Example />);
    const incButton = await findByText(container, /increment/);
    const decButton = await findByText(container, /decrement/);
    let num = await findByText(container, /0/);
    expect(num).toBeTruthy();
    expect(num.textContent).toBe(`0`);
    incButton.click();
    expect(num.textContent).toBe(`1`);
    decButton.click();
    expect(num.textContent).toBe(`0`);
    done();
  });
});
