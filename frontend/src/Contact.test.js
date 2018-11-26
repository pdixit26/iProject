import React from 'react'
import {render, getByText} from 'react-testing-library'
import Contact from './Contact'

it('renders without crashing', () => {
   const {container} = render(<h2>Contact</h2>)
   getByText(container, 'Contact')
})