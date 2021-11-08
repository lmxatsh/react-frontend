import React, { useState } from 'react'

function App() {
  const [userName, updateUserName] = useState('')
  return (
    <div>
      <h1 data-testid="test-username-header">Vite-React Demo App</h1>
      <input
        id="username-input"
        data-testid="test-username-input"
        type="text"
        value={userName}
        placeholder="Please input"
        onChange={(e) => updateUserName(e.target.value)}
      />
      <div data-testid="test-username-display">user: {userName}</div>
    </div>
  )
}

export default App
