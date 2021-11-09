import React from 'react'
import styled from 'styled-components'
import { CardAvatar, CardBody, CardFooter, CardHeader } from '../Card'

export const TweetCard = ({ tweets }) => {
  // console.log(tweets)
  return (
    <StyledTweetCard>
      <CardAvatar avatar={tweets.user.profile_image_url} />
      <div>
        <CardHeader screenName={tweets.user.screen_name} />
        <CardBody tweet={tweets.text} />
        <CardFooter hashtags={tweets.entities.hashtags} />
      </div>
    </StyledTweetCard>
  )
}

const StyledTweetCard = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`
