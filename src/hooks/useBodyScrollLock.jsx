import { useContext, useEffect } from "react";
import { AppContext } from '../contexts/AppContext'

export const useBodyScrollLock = () => {
    const bodyStyle = document.body.style;
    const { isLocked, setIsLocked } = useContext(AppContext);

    useEffect(() => {
        bodyStyle.overflowY = isLocked ? 'hidden' : ''
    }, [isLocked, bodyStyle])

    const toggleBodyScroll = () => {
        setIsLocked(!isLocked);
    } 
    
    return {
        isLocked, toggleBodyScroll
    }
}
