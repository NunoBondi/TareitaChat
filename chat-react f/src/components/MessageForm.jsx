import {forwardRef} from 'react'
import {Form, useParams} from 'react-router-dom'
// import EmojiPicker from 'emoji-picker-react';

const MessageForm = forwardRef(function MessageForm(props, ref) {
  const params = useParams()

  return (
    <Form
      action={`/rooms/${params.roomId}`}
      className="mt-4 rounded-md bg-gray-100 p-2"
      method="post"
      ref={ref}
    >
      <input
        autoFocus
        className="block w-full bg-transparent px-4 py-2"
        name="message"
        placeholder="Message..."
        type="text"
      />
      
      {/* <EmojiPicker/> */}
    </Form>
  )
})

export default MessageForm
