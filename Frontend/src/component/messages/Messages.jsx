import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import { useRef, useEffect } from 'react'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const { messages, loading } = useGetMessage()
  useListenMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
      })
    }
  }, [messages, lastMessageRef])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <p className="text-center">
          Start conversation by sending a message
        </p>
      ) : messages.length === 0 ? (
        <p className="text-center">
          Start conversation by sending a message
        </p>
      ) : (
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))
      )}
    </div>
  )
}

export default Messages