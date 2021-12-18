import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    console.log(allContext)

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;