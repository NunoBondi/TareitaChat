import React, { useState, useEffect } from 'react';
import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import { FcConferenceCall } from "react-icons/fc";
import { CiCircleAlert } from 'react-icons/ci';
import { AuthContext } from '../context/auth.context';
import ky from '../utils/ky';
import ChannelList from '../components/ChannelList';
import toast, { Toaster } from 'react-hot-toast';
export async function loader() {
  try {
    const channels = await ky.get('channels').json();
    const user = await ky.get('user').json();

    return {
      user,
      channels,
    };
  } catch (err) {
    if (err.response.status === 401) {
      return redirect('/login');
    }
  }
}

export default function App() {
  const { user, channels } = useLoaderData();
  const [newMessageCount, setNewMessageCount] = useState(0);
  // const notify = () => toast('Successfully logout');

  function handleLogout() {
    localStorage.removeItem('token');
    // toast.success('Successfully LogOut!')
    window.location.reload();
  }

  //Probando (no ta funcando - revisar)
  useEffect(() => {
    console.log('Mensajes no visibles:', newMessageCount);
  }, [newMessageCount]);

  return (
    <AuthContext.Provider value={user}>
            <Toaster/> 
     
      <div className="flex h-screen ">
        <div className="flex w-[320px] flex-col border border-gray-100">
          <h2 className="flex h-12 items-center justify-center border-b bg-[#1B2430] text-white border-gray-100 text-xl font-semibold">
            Channels <FcConferenceCall />
          </h2>
          <ChannelList channels={channels} />
          <button
            className="border flex w-full items-center justify-center p-4"
            onClick={handleLogout}
            type="button"
          >
            <span className='flex items-center border border-red-500 rounded-3xl p-2'>Log Out <CiCircleAlert color='red'/> </span>
          </button>
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="flex h-12 items-center bg-[#1B2430] text-white justify-center border-b border-gray-100 text-xl font-semibold">
            Messages
          </h2>
          <Outlet />
        </div>
      </div>
    </AuthContext.Provider>
  );
}
