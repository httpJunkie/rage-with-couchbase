import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../components/partial/counter'

test('increments when clicked', () => { 
  /* ARRANGE */

  const div = document.createElement('div')
  div.setAttribute("id", "test-root")
  document.body.appendChild(div)

  /* ACT */

  ReactDOM.render(<Counter />, document.getElementById('test-root'));
  const button = document.body.querySelector('button')

  /* ASSERT */

  expect(button.textContent).toBe('0')

  /* ACT */

  button.click()
  button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  button.click()

  /* ASSERT */

  expect(button.textContent).toBe('4')
  console.log(`final state of HTML: \n${document.body.innerHTML}`)

  /* TEAR DOWN */
})
