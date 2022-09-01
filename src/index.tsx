import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import AuthContext, { AuthProvider } from './contexts/auth'
import Routes from './pages/dashboard'
import Login from './pages/Login'
import Cadastrar from './pages/Login/Cadastrar'
import RecuperarSenha from './pages/Login/RecuperarSenha'
import { Theme } from './styles/theme'

const Stack = createNativeStackNavigator()

const RoutesMain = () => {
  const { user } = useContext(AuthContext)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
          </>
        ) : (
          <Stack.Screen name="Dashboard" component={Routes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Theme>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </Theme>
  )
}
