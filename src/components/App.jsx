/** @jsx jsx */
import { css, jsx, ThemeContext } from '@emotion/core'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ColorPalette, THEME } from '../constants'

import About from './About'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  const [theme, setTheme] = useState(THEME.light)
  const toggleTheme = () => {
    const newTheme = theme === THEME.dark ? THEME.light : THEME.dark
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div
        css={css`
          background: ${ColorPalette[theme].bgColor};
          box-sizing: border-box;
          color: ${ColorPalette[theme].txtColor};
          min-height: 100%;
          padding: 40px 80px;
          transition: background 0.2s ease-out, color 0.2s ease-out;
        `}
      >
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
