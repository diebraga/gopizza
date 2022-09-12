import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';
import { Alert } from "react-native"
import auth from "@react-native-firebase/auth"

type AuthContexData = {
  signInIsLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
}

type AuthProviderProps = {
  children?: ReactNode
}

export const AuthContext = createContext({} as AuthContexData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signInIsLoading, setSignInIsLoading] = useState(false)

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert("SignIn", "Email and Password are required fields")
    }

    setSignInIsLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(account => {
        console.log(account)
      })
      .catch(err => {
        const { code } = err;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("SignIn", "Invalid email or password")
        } else {
          return Alert.alert("SignIn", "Sign in has failed")
        }
      })
      .finally(() => setSignInIsLoading(false))
  }
  return (
    <AuthContext.Provider value={{
      signInIsLoading,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context;
}