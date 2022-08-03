import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import { Theme } from './styles/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Theme>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Theme>
  );
}
