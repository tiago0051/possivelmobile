import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthProvider } from './contexts/auth';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Cadastrar from './pages/Login/Cadastrar';
import RecuperarSenha from './pages/Login/RecuperarSenha';
import { Theme } from './styles/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Theme>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </AuthProvider>
  );
}
