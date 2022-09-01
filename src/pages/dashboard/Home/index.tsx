import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function Home() {
  const [itemsFeed, setItemsFeed] = useState([])
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          width: '80%',
          backgroundColor: '#fdfdfd',
          shadowColor: '#171717',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          borderRadius: 8,
          padding: 10
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 20 }}>Novo Conteúdo</Text>
          <Text style={{ fontSize: 9 }}>21/06</Text>
        </View>

        <View>
          <Text style={{ fontSize: 13 }}>
            Novo conteúdo publicado pelo professor(a) José Fonseca
          </Text>
        </View>
      </View>
    </View>
  )
}
