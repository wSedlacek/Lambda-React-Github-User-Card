import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app.component';

import { sleep } from 'setupTests';

test('should render without errors.', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});

test('should have UserCard', async () => {
  const { baseElement } = render(<App />);
  await sleep(300);
  expect(baseElement.querySelector('.UserCard')).toBeTruthy();
});
