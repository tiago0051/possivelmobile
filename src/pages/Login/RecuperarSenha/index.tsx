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
import { Alert, Keyboard, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonMain from '../../../components/elements/button/buttonMain';

export default function RecuperarSenha({ navigation }: { navigation: NativeStackNavigationProp<any,any> }) {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    function handleRecuperarSenha() {
        Keyboard.dismiss();
        if(!email) return Alert.alert("Conta", "Preencha seu email!")

        setLoading(true);
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Redefinir senha", "Enviamos o email de recuperação");
                setLoading(false);
                navigation.navigate("Login");
            })
            .catch(() => {
                Alert.alert("Redefinir senha", "E-mail não encontrado");
                setLoading(false);
                setEmail('');
            })
        
    }
    return (
        <Container>
            <KeyboardAvoidingView behavior="padding" style={{flex: 1, justifyContent: "center"}} >
                <StatusBar style='auto' />
                <View style={{alignItems: "center"}}>
                        <Image source={require('./assets/boy-cropped-question-mark.png')} />
                </View>

                <LoginContainer>
                    <LoginForm>
                        <Text>Email:</Text>
                        <TextInput onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" autoCapitalize='none' value={email} />

                        <ButtonMain title="Recuperar Senha" isLoading={loading} onClick={handleRecuperarSenha} />

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