import {redirect, useNavigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import ky from '../utils/ky'

export async function loader() {
  try {
    const user = await ky.get('user').json()

    if (user) {
      return redirect('/')
    }
  } catch (err) {
    console.error(err)
  }

  return {}
}

export default function Login() {
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const data = await ky
      .post('login', {
        json: {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        },
      })
      .json()

    localStorage.setItem('token', data.token)

    navigate('/')
  }

  return (
    <div className="mx-auto mt-8 max-w-md">
       <Toaster position="top-center"
  reverseOrder={false}/>
      <h1 className="text-center text-2xl">Login</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="block w-full rounded border border-gray-200 px-4 py-2"
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="block w-full rounded border border-gray-200 px-4 py-2"
            id="password"
            type="password"
          />
        </div>
        <button onClick={toast('Verificando!')} className="flex h-12 w-full items-center justify-center rounded bg-indigo-500 font-bold text-white hover:bg-indigo-600">
          LogIn 
        </button>
      </form>
    </div>
  )
}
