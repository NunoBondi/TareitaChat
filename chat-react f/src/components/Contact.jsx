import {Link} from 'react-router-dom'

export default function Contact({channel}) {
  return (
    <div>
      <Link to={`/rooms/${channel.id}`}>{channel.name}</Link>
    </div>
  )
}
