import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AuthProvider } from './contexts/auth'
import { Theme } from './styles/theme'

export default function App() {
  return (
    <Theme>
      <AuthProvider />
    </Theme>
  )
}
