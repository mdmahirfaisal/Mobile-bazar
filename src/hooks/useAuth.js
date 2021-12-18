import { useContext } from "React";
import { AuthContext } from '../context/AuthProvider'



const useAuth = () => {
    const auth = useContext(AuthContext);
    console.log(auth)
    return auth;
}

export default useAuth;