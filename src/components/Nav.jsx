/** @jsx jsx */
import { css, jsx, ThemeContext } from '@emotion/core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ColorPalette, THEME } from '../constants'

const Nav = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
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
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              color={ColorPalette[theme].iconColor}
              icon={theme === THEME.dark ? faMoon : faSun}
              size="lg"
            />
          </button>
        </nav>
      )}
    </ThemeContext.Consumer>
  )
}

export default Nav
