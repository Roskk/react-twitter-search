import styled from 'styled-components'
import { TweetFeed } from './Views/TweetFeed/TweetFeed'

function App() {
  return (
    <StyledMain>
      <TweetFeed />
    </StyledMain>
  )
}

export default App

const StyledMain = styled.main`
  margin: 16px 16px 80px 16px;
`
