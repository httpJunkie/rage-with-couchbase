import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Counter from '../components/partial/counter'

afterEach(cleanup)

test('increments when clicked', () => { 
  /* ARRANGE */

  const { getByText, debug, unmount, rerender } = render(<Counter />)

  /* ASSERT */
  const button = getByText('0')

  /* ACT */

  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)

  /* ASSERT */  

  expect(button.textContent).toBe('4')
  debug()
  unmount()
  debug()
  console.log(`final state of HTML: \n${document.body.innerHTML}`)

  /* TEAR DOWN */
})

