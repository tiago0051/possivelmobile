import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Home() {
  const [itemsFeed, setItemsFeed] = useState([
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    },
    {
      titulo: 'Novo Conteúdo',
      conteudo: 'Novo conteúdo publicado pelo professor(a) José Fonseca.'
    }
  ])
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
      }}
    >
      <View
        style={{
          marginBottom: 30,
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 15, marginTop: 10, color: '#565656' }}>
          Sua proxíma aula de{' '}
          <Text style={{ fontWeight: '500', color: 'black' }}>XXXXXXX</Text> é
          14 de agosto as 14:00.
        </Text>
      </View>
      <ScrollView style={{ width: '100%', padding: 20 }}>
        {itemsFeed.map((item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              backgroundColor: '#fdfdfd',
              shadowColor: '#171717',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              borderRadius: 8,
              padding: 10,
              marginTop: 5,
              marginBottom: 5
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
              <Text style={{ fontSize: 16 }}>{item.titulo}</Text>
              <Text style={{ fontSize: 9 }}>21/06</Text>
            </View>

            <View>
              <Text style={{ fontSize: 13, color: '#565656' }}>
                {item.conteudo}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
