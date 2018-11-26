import React from 'react'
import {render} from 'react-testing-library'
import Main from './Main'

it('renders without crashing', () => {
  const {getByText} = render(<Main />);
  expect(getByText('About').textContent).toBe('About');
  expect(getByText('Home').textContent).toBe('Home');
  expect(getByText('Contact').textContent).toBe('Contact');
})