import { ButtonProps, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: white;
    padding-top: 80px;
`;

export const Image = styled.Image`
    width: 300px;
    height: 200px;
`;

export const LoginContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15%;
`;

export const LoginForm = styled.View`
    width: 90%;
    max-width: 90%;
`;

export const Text = styled.Text`
    margin-top: 20px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    width: 100%;
    font-size: 26px;
    height: 48px;
    margin-top: 10px;
    background-color: white;
    align-items: stretch;
`;

export const CadastrarEsqueciSenhaContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    width: 40%;
    top: 6px;
`;

export const TextCadastrar = styled.Text`
`;