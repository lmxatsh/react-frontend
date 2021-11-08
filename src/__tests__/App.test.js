import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'

describe('Test App', () => {
  test('header rendered', () => {
    render(<App />)
    const header = screen.getByTestId('test-username-header')
    expect(header).toHaveTextContent('Vite-React Demo App')
  })
  test('input rendered', () => {
    render(<App />)
    const input = screen.getByTestId('test-username-input')
    expect(input).toBeInTheDocument()
  })
  test('input and displays username', () => {
    render(<App />)
    const input = screen.getByTestId('test-username-input')
    user.type(input, 'ViteApp')
    expect(screen.getByTestId('test-username-display')).toHaveTextContent(
      'ViteApp'
    )
  })
})
