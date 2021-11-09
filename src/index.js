import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TweetFeedProvider from './context/TweetFeedContext'

ReactDOM.render(
  <React.StrictMode>
    <TweetFeedProvider>
      <App />
    </TweetFeedProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
