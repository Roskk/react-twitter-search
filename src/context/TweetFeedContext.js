import React, { useState, createContext } from 'react'

export const TweetFeedContext = createContext()

const TweetFeedProvider = ({ children }) => {
  const [hashtagFilters, setHashtagFilters] = useState([])
  return (
    <TweetFeedContext.Provider value={[hashtagFilters, setHashtagFilters]}>
      {children}
    </TweetFeedContext.Provider>
  )
}

export default TweetFeedProvider
