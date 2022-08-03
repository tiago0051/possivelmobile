import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';

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
} from './styles';

import { Alert, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import ButtonMain from '../../components/elements/button/buttonMain';

export default function Cadastrar({ navigation }: { navigation: NativeStackNavigationProp<any,any> }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');

    const [loading, setLoading] = useState(false);

    function handleNewAccount() {

        if(!email) return Alert.alert("Conta", "Preencha o email corretamente");

        if(!senha || !senhaConfirmar) return Alert.alert("Conta", "Preencha a senha e a confirmação corretamente");

        if(senha !== senhaConfirmar) return Alert.alert("Conta", "A confirmação da senha não é igual a senha")

        setLoading(true);

        auth()
            .createUserWithEmailAndPassword(email.trim(), senha)
            .then(() => Alert.alert("Conta", "Cadastrado com sucesso"))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior="position" style={{flex: 1}} >
                <StatusBar style='auto' />
                <View style={{alignItems: "center"}}>
                    <Image source={require('./assets/xcomo-fazer-cadastro-no-pat.png.pagespeed.ic.xBJeg2Fiq5.webp')} />
                </View>

                <LoginContainer>
                    <LoginForm>
                        <Text>Email:</Text>
                        <TextInput onChangeText={setEmail} />

                        <Text>Senha:</Text>
                        <TextInput secureTextEntry={true} onChangeText={setSenha} />

                        <Text>Confirmar senha:</Text>
                        <TextInput secureTextEntry={true} onChangeText={setSenhaConfirmar} />

                        <ButtonMain title="Cadastrar" isLoading={loading} onClick={handleNewAccount} />

                        <CadastrarEsqueciSenhaContainer>
                            <ButtonContainer>
                                <TouchableOpacity onPress={() => navigation.push('Login')}>
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