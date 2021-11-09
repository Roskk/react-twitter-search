import React from 'react'
import styled from 'styled-components'

export const CardHeader = ({ screenName }) => {
  return <StyledCardHeader>@{screenName}</StyledCardHeader>
}

const StyledCardHeader = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
`
