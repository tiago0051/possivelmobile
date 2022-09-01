import {
  NavigationContainer,
  NavigationContext
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Agenda from './Agenda'
import AuthContext from '../../contexts/auth'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Materias from './Materias'
import { Button } from 'react-native'

const Tab = createBottomTabNavigator()

export default function Routes() {
  const { signOut } = useContext(AuthContext)
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Inicio') {
              iconName = 'home'
            } else if (route.name === 'Agenda') {
              iconName = 'calendar'
            } else if (route.name === 'Matérias') {
              iconName = 'library'
            } else {
              iconName = 'log-out-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#ffffffcc',

          tabBarInactiveBackgroundColor: '#e4dd15',
          tabBarActiveBackgroundColor: '#e4dd15'
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            tabBarBadge: 3,
            headerTitle: 'Seja bem-vindo',
            headerRightContainerStyle: { paddingRight: 5 },
            headerRight: () => {
              return <Button title="Sair" onPress={() => signOut()} />
            }
          }}
        />
        <Tab.Screen name="Matérias" component={Materias} />
        <Tab.Screen name="Agenda" component={Agenda} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
