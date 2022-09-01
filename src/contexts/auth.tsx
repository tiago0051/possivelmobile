import React, { createContext, ReactElement, ReactNode, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import {
  NavigationContainer,
  NavigationContext
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login'
import Cadastrar from '../pages/Login/Cadastrar'
import RecuperarSenha from '../pages/Login/RecuperarSenha'
import Routes from '../pages/dashboard'

interface AuthContextData {
  signed: boolean
  user: FirebaseAuthTypes.User | undefined
  signIn(email: string, senha: string): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{
  children: ReactElement | ReactElement[]
}> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User>()
  const signed = user !== undefined

  async function signIn(email: string, senha: string) {
    const response = await auth().signInWithEmailAndPassword(email, senha)

    setUser(response.user)
  }

  function signOut() {
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
