import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';
import { Alert } from "react-native"
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string
  Name: string
  isAdmin: boolean
}

type AuthContexData = {
  signInIsLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  user: User | null
  signOut: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
}

type AuthProviderProps = {
  children?: ReactNode
}

const USER_COLLECTION = "@gopizza:users"

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
          .then(async (profile) => {
            const { Name, isAdmin } = profile.data() as User

            if (profile.exists) {
              const user = {
                id: account.user.uid,
                Name,
                isAdmin
              }
              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user))
              setUser(user)
            }
          })
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

  const loadUserStoredData = async () => {
    setSignInIsLoading(true)

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION)

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User
      console.log(userData)
      setUser(userData)
    }

    setSignInIsLoading(false)
  }

  const signOut = async () => {
    await auth().signOut()
    await AsyncStorage.removeItem(USER_COLLECTION)
    setUser(null)
  }

  const forgotPassword = async (email: string) => {
    if (!email) {
      return Alert.alert("Redefine password", "Insert your email")
    }

    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefine password", `An email has been sent to ${email}`))
    .catch((err) => {
      console.log(err)
      return Alert.alert("Redefine password", `Error sending email`)
    })
  }

  useEffect(() => {
    loadUserStoredData()
  }, [])

  return (
    <AuthContext.Provider value={{
      signInIsLoading,
      signIn,
      user,
      signOut,
      forgotPassword
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context;
}