import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { TweetCard } from '../../components/TweetCard'
import { TweetFeedContext } from '../../context/TweetFeedContext'
import httpClientWrapper from '../../httpClientWrapper'
import { HashtagFilters } from './HashtagFilters'

export const TweetFeed = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [canLoadMoreTweets, setCanLoadMoreTweets] = useState(false)
  const [nextResults, setNextResults] = useState('')
  const [hashtagFilters] = useContext(TweetFeedContext)

  useEffect(() => {
    setIsLoading(true)
    if (searchTerm) {
      const userIsTypingDelay = setTimeout(() => {
        const url = `/1.1/search/tweets.json?count=5&q=${searchTerm},%23${hashtagFilters}&result_type=popular&include_entities=true`
        httpClientWrapper({
          method: 'get',
          url: url,
        })
          .then((res) => {
            const results = res.data.statuses
            setNextResults(res.data.search_metadata.next_results)
            setTweets(results)
            if (results.length >= 5) {
              setCanLoadMoreTweets(true)
            } else {
              setCanLoadMoreTweets(false)
            }
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(false)
          })
      }, 1000)
      return () => clearTimeout(userIsTypingDelay)
    }
  }, [searchTerm, hashtagFilters])

  const loadMoreTweets = () => {
    const url = `/1.1/search/tweets.json${nextResults}`
    setIsLoading(true)
    httpClientWrapper({
      method: 'get',
      url: url,
    })
      .then((res) => {
        const results = res.data.statuses
        setNextResults(res.data.search_metadata.next_results)
        setTweets([...tweets, ...results])
        if (results.length >= 5) {
          setCanLoadMoreTweets(true)
        } else {
          setCanLoadMoreTweets(false)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <StyledLayout>
      <h1>Tweet Feed</h1>
      <StyledSearch>
        <input
          placeholder='Search by keyword'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg aria-hidden='true' width='18' height='18' viewBox='0 0 18 18'>
          <path d='m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 112 7a5 5 0 0110 0Z'></path>
        </svg>
      </StyledSearch>
      <StyledFilters>
        <HashtagFilters />
      </StyledFilters>
      {tweets.length > 0 && (
        <StyledFeedWrapper>
          {tweets.map((tweet, i) => (
            <StyledFeed key={i} isOdd={Boolean(i % 2)}>
              <TweetCard tweets={tweet} />
              {canLoadMoreTweets && tweets.length - 1 === i && !isLoading ? (
                <StlyedButton>
                  <span onClick={loadMoreTweets}>Load More</span>
                </StlyedButton>
              ) : null}
            </StyledFeed>
          ))}
        </StyledFeedWrapper>
      )}
      {searchTerm && isLoading ? (
        <StyledTextCenter>Loading...</StyledTextCenter>
      ) : null}
      {searchTerm && !tweets.length && !isLoading ? (
        <StyledTextCenter>No results.</StyledTextCenter>
      ) : null}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  display: grid;
  grid-gap: 20px;
  max-width: 1020px;
  margin: 16px auto;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 274px;
  grid-template-areas:
    'header header'
    'search filter'
    'feed filter';
  @media (max-width: 768px) {
    grid-template-areas:
      'header header'
      'search search'
      'filter filter'
      'feed feed';
  }
  h1 {
    grid-area: header;
    font-size: 24px;
  }
`
const StyledSearch = styled.div`
  grid-area: search;
  display: flex;
  height: 50px;
  width: 100%;
  position: relative;
  input {
    padding: 16px 36px;
    width: calc(100% - 74px);
    border: 1px solid #c6cbce;
    border-radius: 3px;
  }
  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    margin-top: -9px;
    fill: #c6cbce;
  }
`
const StyledFeedWrapper = styled.div`
  grid-area: feed;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 10%);
  border-radius: 5px;
  overflow: hidden;
`
const StyledFeed = styled.div`
  background: ${(props) => (props.isOdd ? '#f8f9f9' : '#fff')};
`
const StlyedButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  span {
    color: #067acc;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }
`
const StyledTextCenter = styled.div`
  text-align: center;
  padding: 10px;
`
const StyledFilters = styled.div`
  grid-area: filter;
`
