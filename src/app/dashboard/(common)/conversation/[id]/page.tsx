import React from 'react'

const Conversation = ({params}:{params:{id: string}}) => {
  return (
    <div>Conversation {params.id}</div>
  )
}

export default Conversation