import * as React from 'react'
import './App.css'
import { Button } from '@acme/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Turborepo Admin</h1>
        <p>This app is powered by Vite.</p>
        <p>
          <Button>My Button</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
