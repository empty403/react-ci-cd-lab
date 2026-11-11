import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderApp(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
}

describe('App', () => {
  it('opens Home and navigates to About and back', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Learn about this project' }))
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Back to home' }))
    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument()
  })

  it('opens About directly', () => {
    renderApp('/about')
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('increments and resets the counter', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByRole('status')).toHaveTextContent('Count: 0')
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(screen.getByRole('status')).toHaveTextContent('Count: 2')
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByRole('status')).toHaveTextContent('Count: 0')
  })

  it('handles an unknown route', () => {
    renderApp('/missing')
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')
  })
})
