import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonMain from '../../components/elements/button/buttonMain';

export default function Login({ navigation }: { navigation: NativeStackNavigationProp<any,any> }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        if(!email) Alert.alert("Conta", "Preencha seu email!")
        if(!password) Alert.alert("Conta", "Preencha sua senha!")

        setLoading(true);
        auth()
            .signInWithEmailAndPassword(email.trim(), password)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        
    }
    return (
        <Container>
            <KeyboardAvoidingView behavior="padding" style={{flex: 1}} >
                <View style={{flex: 1, justifyContent: "center"}}>
                    <StatusBar style='auto' />
                    <View>
                        <Image source={require('./assets/logo.jpg')} />
                    </View>

                    <LoginContainer>
                        <LoginForm>
                            <Text>Email:</Text>
                            <TextInput onChangeText={setEmail} />

                            <Text>Senha:</Text>
                            <TextInput secureTextEntry={true} onChangeText={setPassword} />

                            <ButtonMain title="Entrar" onClick={handleLogin} isLoading={loading} />

                            <CadastrarEsqueciSenhaContainer>
                                <ButtonContainer>
                                <TouchableOpacity onPress={() => navigation.push('Cadastrar')}>
                                        <TextCadastrar>Criar conta</TextCadastrar>
                                    </TouchableOpacity>
                                </ButtonContainer>

                                <ButtonContainer style={{alignItems: "flex-end"}}>
                                    <TouchableOpacity>
                                        <TextCadastrar>Esqueci senha</TextCadastrar>
                                    </TouchableOpacity>
                                </ButtonContainer>
                            </CadastrarEsqueciSenhaContainer>
                        </LoginForm>
                    </LoginContainer>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}