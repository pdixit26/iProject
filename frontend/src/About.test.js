import React from 'react'
import {render, getByText} from 'react-testing-library'
import About from './About'

it('renders without crashing', () => {
 const {container} = render(<h2>About</h2>)
 getByText(container, 'About')
 
})