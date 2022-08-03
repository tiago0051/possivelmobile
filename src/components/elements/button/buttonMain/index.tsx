import React from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';
import { TextButton, TouchableOpacity, ButtonContainer } from './style';

interface propsI extends TouchableOpacityProps {
    isLoading?: boolean;
    title: string,
    onClick: (e: GestureResponderEvent) => void
}

const ButtonMain: React.FC<propsI> = ({ title, isLoading, onClick }) => {

    function handleClick(e: GestureResponderEvent){
        if (isLoading) return e.preventDefault();

        onClick(e);
    }

    return (
        <ButtonContainer>
            <TouchableOpacity onPress={handleClick} isLoading={isLoading}>
                <TextButton isLoading={isLoading}>{title}</TextButton>
            </TouchableOpacity>
        </ButtonContainer>
    )
}

export default ButtonMain;