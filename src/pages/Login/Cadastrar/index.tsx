import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import auth from '@react-native-firebase/auth'

import {
  Container,
  Image,
  LoginContainer,
  TextInput,
  Text,
  LoginForm,
  CadastrarEsqueciSenhaContainer,
  TextCadastrar,
  ButtonContainer
} from './styles'

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native'
import ButtonMain from '../../../components/elements/button/buttonMain'

export default function Cadastrar({
  navigation
}: {
  navigation: NativeStackNavigationProp<any, any>
}) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmar, setSenhaConfirmar] = useState('')

  const [loading, setLoading] = useState(false)

  function handleNewAccount() {
    Keyboard.dismiss()

    if (!email) return Alert.alert('Conta', 'Preencha o email corretamente')

    if (!senha || !senhaConfirmar)
      return Alert.alert(
        'Conta',
        'Preencha a senha e a confirmação corretamente'
      )

    if (senha !== senhaConfirmar)
      return Alert.alert('Conta', 'A confirmação da senha não é igual a senha')

    setLoading(true)

    auth()
      .createUserWithEmailAndPassword(email.trim(), senha)
      .then(async user => {
        await user.user.sendEmailVerification()
        Alert.alert('Conta', 'Cadastrado com sucesso')
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBar style="auto" />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('./assets/xcomo-fazer-cadastro-no-pat.png.pagespeed.ic.xBJeg2Fiq5.webp')}
          />
        </View>

        <LoginContainer>
          <LoginForm>
            <Text>Email:</Text>
            <TextInput
              onChangeText={setEmail}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
            />

            <Text>Senha:</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={setSenha}
              autoCapitalize="none"
              textContentType="newPassword"
            />

            <Text>Confirmar senha:</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={setSenhaConfirmar}
              autoCapitalize="none"
              textContentType="newPassword"
            />

            <ButtonMain
              title="Cadastrar"
              isLoading={loading}
              onClick={handleNewAccount}
            />

            <CadastrarEsqueciSenhaContainer>
              <ButtonContainer>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <TextCadastrar>Voltar</TextCadastrar>
                </TouchableOpacity>
              </ButtonContainer>
            </CadastrarEsqueciSenhaContainer>
          </LoginForm>
        </LoginContainer>
      </KeyboardAvoidingView>
    </Container>
  )
}
