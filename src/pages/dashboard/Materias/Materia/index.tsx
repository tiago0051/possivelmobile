import React from 'react'
import { Text, View } from 'react-native'

export default function Materia({ idMateria }: { idMateria: string }) {
  return (
    <View>
      <Text>{idMateria}</Text>
    </View>
  )
}
