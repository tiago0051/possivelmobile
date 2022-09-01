import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Materia from './Materia'

interface MateriaI {
  id: string
  nome: string
  professores: { nome: string; uid: string }[]
}

export default function Materias() {
  const [materias, setMaterias] = useState<MateriaI[]>([])
  const [materia, setMateria] = useState('')

  useEffect(() => {
    firestore()
      .collection('materias')
      .get()
      .then(a => {
        setMaterias(a.docs.map(b => ({ id: b.id, ...b.data() })) as any[])
      })
  }, [])
  return !materia ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
      }}
    >
      {materias.map((ma, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: '#fdfdfd',
            shadowColor: '#171717',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            borderRadius: 8,
            padding: 10,
            margin: 5,
            width: '45%'
          }}
          onPress={() => setMateria(ma.id)}
        >
          <Text
            style={{
              fontSize: 16,
              textTransform: 'capitalize'
            }}
          >
            {ma.nome}
          </Text>
          {ma.professores.map(professor => (
            <Text
              style={{
                fontSize: 12,
                color: '#565656',
                textTransform: 'capitalize'
              }}
              key={professor.uid}
            >
              {professor.nome}
            </Text>
          ))}
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <Materia idMateria={materia} />
  )
}
