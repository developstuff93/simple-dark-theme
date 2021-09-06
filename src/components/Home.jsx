/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Home = () => (
  <div>
    <h1
      css={css`
        font-size: 48px;
        font-weight: 500;
        line-height: 60px;
      `}
    >
      We're on the mission to accelerate all people's prosperity by making the
      stock market inclusive, educational, and fun.
    </h1>
    <p
      css={css`
        font-size: 20px;
        line-height: 30px;
        > strong {
          font-weight: 500;
        }
      `}
    >
      <strong>Public is a social investing app</strong> that makes it possible
      to own the companies you believe in, with any amount of money . Through an
      unmistakably simple experience, Public members can buy slices of stocks
      and ETFs, follow interest-based themes, and learn from a transparent
      community of subject-matter experts and friends along the way.
    </p>
  </div>
)

export default Home
