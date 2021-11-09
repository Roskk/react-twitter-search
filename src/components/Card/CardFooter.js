import React, { useContext } from 'react'
import { TweetFeedContext } from '../../context/TweetFeedContext'
import styled from 'styled-components'
import { Hasgtag } from '../Hasgtag'

export const CardFooter = ({ hashtags }) => {
  const [hashtagFilters, setHashtagFilters] = useContext(TweetFeedContext)

  const updateHashtagFilters = (tag) => {
    console.log(tag, hashtagFilters)
    if (!hashtagFilters.includes(tag.text)) {
      setHashtagFilters([...hashtagFilters, tag.text])
    }
  }

  return (
    <StyledHashTagWrapper>
      {hashtags?.map((tag, i) => (
        <Hasgtag
          key={`${i}${tag.text}`}
          label={tag.text}
          handleOnClick={() => updateHashtagFilters(tag)}
        />
      ))}
    </StyledHashTagWrapper>
  )
}

const StyledHashTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
