import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app.component';

test('should render without errors.', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});

test('should have UserCard', () => {
  const { baseElement } = render(<App />);
  expect(baseElement.querySelector('.UserCard')).toBeTruthy();
});
