import React from 'react';
import {render, screen} from '@testing-library/react';
import AppContainer from './AppContainer';

test('renders learn react link', () => {
  // @ts-ignore
  render(<AppContainer/>);
  const linkElement = screen.getByText('div');
  expect(linkElement).toBeInTheDocument();
});
