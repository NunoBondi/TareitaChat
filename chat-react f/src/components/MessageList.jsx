import {forwardRef} from 'react'

import Message from './Message'

const MessageList = forwardRef(function MessageList({messages}, ref) {
  return (
    <div className="flex flex-1 flex-col space-y-4 overflow-y-scroll" ref={ref}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
})

export default MessageList
