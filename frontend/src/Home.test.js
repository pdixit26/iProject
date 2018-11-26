import React from 'react'
import {render} from 'react-testing-library'
import Home from './Home'

it('renders without crashing', () => {
 const {getByText} =  render(<Home />);
  
 expect(getByText('Table Name:').textContent).toBe('Table Name: ');
 expect(getByText('Device Type:').textContent).toBe('Device Type: ');
 expect(getByText('Save Table').textContent).toBe(' Save Table ');
})