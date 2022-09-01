import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from 'react'
import auth, { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth'
import ExpoSecurity from 'expo-secure-store'

interface AuthContextData {
  user: FirebaseAuthTypes.User | undefined
  signIn(email: string, senha: string): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{
  children: ReactElement | ReactElement[]
}> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User>()
  const [initializing, setInitializing] = useState(true)

  async function signIn(email: string, senha: string) {
    const response = await auth().signInWithEmailAndPassword(email, senha)

    setUser(response.user)
  }

  function signOut() {
    auth().signOut()
  }

  function onAuthStateChanged(user: any) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  })

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
