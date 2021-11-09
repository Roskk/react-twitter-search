import React from 'react'
import styled from 'styled-components'

export const CardAvatar = ({ avatar }) => {
  return (
    <StyledWrapper>
      <img src={avatar} alt='avatar' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 40px;
  height: 40px;
  img {
    border-radius: 50%;
    width: 40px;
  }
`
