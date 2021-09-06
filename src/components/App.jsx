/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <div
      css={css`
        background: #fff;
        box-sizing: border-box;
        color: #34374c;
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
  )
}

export default App
