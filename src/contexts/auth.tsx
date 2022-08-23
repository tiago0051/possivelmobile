import React, { createContext, ReactElement, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface IUser {

}

interface AuthContextData {
    signed: boolean;
    user: IUser | undefined;
    signIn(email: string, senha: string): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactElement | ReactElement[] }> = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User>()
    const signed = user !== undefined;

    async function signIn(email: string, senha: string) {
        const response = await auth().signInWithEmailAndPassword(email, senha);

        setUser(response.user)
    }

    return (
        <AuthContext.Provider value={{signed, user, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;