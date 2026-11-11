import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>A small React + TypeScript app for practicing CI/CD.</p>
      <Counter />
      <p><Link to="/about">Learn about this project</Link></p>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>This project includes routing, a counter, linting, type checking, tests, and a production build.</p>
      <p>Add your own CI/CD workflows when you are ready.</p>
      <Link to="/">Back to home</Link>
    </>
  )
}

export default function App() {
  return (
    <div className="app">
      <header>
        <span className="brand">React CI/CD Lab</span>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<><h1>Page not found</h1><Link to="/">Back to home</Link></>} />
        </Routes>
      </main>
      <footer>Built for CI/CD practice.</footer>
    </div>
  )
}
