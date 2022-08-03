import { TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
    align-items: center;
`;

interface ButtonEntrarP extends TouchableOpacityProps {
    isLoading?: boolean
}

export const TouchableOpacity = styled.TouchableOpacity<ButtonEntrarP>`
    background-color: ${(props) => props.theme.colors.PRIMARY_BUTTON_COLOR};
    width: ${(props) => props.isLoading ? '48px' : '100%'};
    height: 48px;
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.isLoading ? '50px' : '4px'};
`;

interface TextButtonP extends TextProps {
    isLoading?: boolean
}

export const TextButton = styled.Text<TextButtonP>`
    color: ${(props) => props.theme.colors.TEXT_COLOR};
    text-transform: uppercase;
    font-size: 16px;
    display: ${(props) => props.isLoading ? 'none' : 'flex'};
`;