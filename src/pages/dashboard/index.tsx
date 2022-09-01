import {
  NavigationContainer,
  NavigationContext
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Agenda from './Agenda'
import AuthContext from '../../contexts/auth'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Sair = () => {
  const { signOut } = useContext(AuthContext)
  useEffect(() => {
    signOut()
  }, [])

  return <></>
}

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Agenda') {
              iconName = focused ? 'today' : 'today-outline'
            } else {
              iconName = 'log-out-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',

          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: '#e4dd15'
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Sair" component={Sair} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
