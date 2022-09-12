import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';
import { Alert } from "react-native"
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';

type User = {
  id: string
  Name: string
  isAdmin: boolean
}

type AuthContexData = {
  signInIsLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  user: User | null
}

type AuthProviderProps = {
  children?: ReactNode
}

export const AuthContext = createContext({} as AuthContexData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signInIsLoading, setSignInIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert("SignIn", "Email and Password are required fields")
    }

    setSignInIsLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(account => {
        firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then()
          .then(profile => {
            const { Name, isAdmin } = profile.data() as User

            if (profile.exists) {
              setUser({
                id: account.user.uid,
                Name,
                isAdmin
              })
            }
          })
          .finally(() => Alert.alert("SignIn", "Sign in has failed"))
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
      signIn,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context;
}