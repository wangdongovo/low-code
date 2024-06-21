import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

const ContextHooks = () => {
  const [theme, setTheme] = useState<any>('light')

  return (
    <div>
      <h1>Context Hooks</h1>

      <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>

        <Panel />
      </ThemeContext.Provider>
    </div>
  )
}

const Panel = () => {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}
    >
      <h2>Panel</h2>
    </div>
  )
}

export default ContextHooks
