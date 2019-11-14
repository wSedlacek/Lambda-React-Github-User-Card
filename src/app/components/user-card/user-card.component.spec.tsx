import React from 'react';
import { render } from '@testing-library/react';

import { UserCard } from './user-card.component';

import { dave } from 'setupTests';

test('should render without errors.', () => {
  const { baseElement } = render(<UserCard user={dave} />);
  expect(baseElement).toBeTruthy();
});

test('should show user info,', () => {
  const { findByText } = render(<UserCard user={dave} />);
  expect(dave.name ? findByText(dave.name) : findByText(dave.login)).toBeTruthy();
});
