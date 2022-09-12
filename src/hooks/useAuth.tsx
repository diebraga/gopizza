import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

type AuthContexData = {

}

type AuthProviderProps = {
  children?: ReactNode
}

export const AuthContext = createContext({} as AuthContexData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context;
}