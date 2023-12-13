import { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [reserve, setReserve] = useState({});

    return (
        <AppContext.Provider
            value={
                {
                    openSidebar, setOpenSidebar,
                    isLocked, setIsLocked,
                    reserve, setReserve
                }
            }>
            {children}
        </AppContext.Provider>
    )
}
