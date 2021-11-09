import React from 'react'
import styled from 'styled-components'

export const Hasgtag = ({label, handleOnClick}) => {
  return <StyledHashTag onClick={handleOnClick}>#{label}</StyledHashTag>
}
const StyledHashTag = styled.span`
  color: #067acc;
  background: #e7f3fa;
  padding: 8px 20px;
  border-radius: 30px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`
