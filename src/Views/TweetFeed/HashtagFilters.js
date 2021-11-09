import React, { useContext } from 'react'
import styled from 'styled-components'
import { TweetFeedContext } from '../../context/TweetFeedContext'
import { Hasgtag } from '../../components/Hasgtag'

export const HashtagFilters = () => {
  const [hashtagFilters, setHashtagFilters] = useContext(TweetFeedContext)

  const updateHashtagFilters = (tagToRemove) => {
    setHashtagFilters(
      hashtagFilters.filter((hashtag) => hashtag !== tagToRemove)
    )
  }
  console.log(hashtagFilters)
  return (
    <StyledFilters>
      <h3>Filter by hashtag</h3>
      {hashtagFilters.length ? (
        <StyledTagWrapper>
          {hashtagFilters?.map((tag) => (
            <Hasgtag
              label={tag}
              handleOnClick={() => updateHashtagFilters(tag)}
            />
          ))}
        </StyledTagWrapper>
      ) : null}
    </StyledFilters>
  )
}

const StyledFilters = styled.div`
  padding: 1px 16px;
  box-shadow: 0 3px 6px 2px rgb(0 0 0 / 10%);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  h3 {
    font-weight: 500;
    margin: 10px 0;
  }
`
const StyledTagWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`
