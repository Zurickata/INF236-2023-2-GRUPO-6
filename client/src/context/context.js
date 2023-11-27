import { createContext, useState , useContext} from "react";
import { loginReq } from '../api/autentificador'

export const context = createContext()

export const useAuth = () => {
    const contexto = useContext(context)
    if(!contexto){
        throw new Error("useAuth must be used within an auth provider")
    }
    return contexto
};

export const authProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [Autenticado, NoAutenticado] = useState(false);


    const login = async (user) => {
        const res = await loginReq(user)
        setUser(res.data)
    };

    return(
        <context.Provider value={{ login , user,}}>
            {children}
        </context.Provider>
    )
}