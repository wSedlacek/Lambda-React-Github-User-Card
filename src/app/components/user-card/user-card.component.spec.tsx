import React from 'react';
import { render } from '@testing-library/react';

import { UserCard } from './user-card.component';

test('should render without errors.', () => {
  const { baseElement } = render(<UserCard />);
  expect(baseElement).toBeTruthy();
});
