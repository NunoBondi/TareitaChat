import {createContext, useContext} from 'react'

export const AuthContext = createContext(undefined)

export function useUser() {
  return useContext(AuthContext)
}
