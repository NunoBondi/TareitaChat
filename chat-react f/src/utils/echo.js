import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

export default new Echo({
  broadcaster: 'pusher',
  key: 'c69e60556d85c03fa2f4',
  cluster: 'us2',
  forceTLS: true,
})
