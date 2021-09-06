/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav
      css={css`
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 60px;
      `}
    >
      <ul
        css={css`
          display: flex;
          list-style: none;
          > li {
            margin-left: 20px;
          }
          & a {
            color: inherit;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        `}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button
        css={css`
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 20px;
          outline: none;
        `}
        className="dark-mode-button"
      >
        <FontAwesomeIcon color="#34374c" icon={faSun} size="lg" />
      </button>
    </nav>
  )
}

export default Nav
