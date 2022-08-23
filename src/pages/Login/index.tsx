import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';


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
import { Alert, Keyboard, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonMain from '../../components/elements/button/buttonMain';
import AuthContext from '../../contexts/auth';

export default function Login({ navigation }: { navigation: NativeStackNavigationProp<any,any> }) {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        Keyboard.dismiss();
        if(!email) return Alert.alert("Conta", "Preencha seu email!")
        if(!password) return Alert.alert("Conta", "Preencha sua senha!")

        setLoading(true);
        
        signIn(email, password)
            .then(() => navigation.push('Dashboard'))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }
    return (
        <Container>
            <KeyboardAvoidingView behavior="padding" style={{flex: 1, justifyContent: "center"}} >
                <StatusBar style='auto' />
                <View style={{alignItems: "center"}}>
                        <Image source={require('./assets/logo.jpg')} />
                </View>

                <LoginContainer>
                    <LoginForm>
                        <Text>Email:</Text>
                        <TextInput onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" autoCapitalize='none' />

                        <Text>Senha:</Text>
                        <TextInput secureTextEntry={true} onChangeText={setPassword} autoCapitalize='none' textContentType="password" />

                        <ButtonMain title="Entrar" isLoading={loading} onClick={handleLogin} />

                        <CadastrarEsqueciSenhaContainer>
                            <ButtonContainer>
                                <TouchableOpacity onPress={() => navigation.push('Cadastrar')}>
                                    <TextCadastrar>Criar conta</TextCadastrar>
                                </TouchableOpacity>
                            </ButtonContainer>

                            <ButtonContainer style={{alignItems: "flex-end"}}>
                                <TouchableOpacity onPress={() => navigation.push('Recuperar Senha')}>
                                    <TextCadastrar>Esqueci senha</TextCadastrar>
                                </TouchableOpacity>
                            </ButtonContainer>
                        </CadastrarEsqueciSenhaContainer>
                    </LoginForm>
                </LoginContainer>
            </KeyboardAvoidingView>
        </Container>
    )
}