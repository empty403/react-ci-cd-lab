import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section aria-labelledby="counter-heading">
      <h2 id="counter-heading">Counter</h2>
      <p role="status">Count: {count}</p>
      <div className="actions">
        <button onClick={() => setCount((value) => value + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}
