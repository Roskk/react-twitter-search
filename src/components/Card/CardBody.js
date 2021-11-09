import React from 'react'
import Linkify from 'react-linkify'

export const CardBody = ({ tweet }) => {
  return <Linkify>{tweet}</Linkify>
}
