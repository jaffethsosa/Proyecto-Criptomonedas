import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        setUsuario({
            name: "Gerson Sosa",
            age: 25,
            email: "juan@gmail.com",
            phone: "123456789",
            registred: "15/Abril/1987"
        });
    }, []);

    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
