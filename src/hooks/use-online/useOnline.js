import { useState, useEffect } from 'react';

const useOnline = () => {
    const [onlineStatus, setOnlineStatus] = useState(!!navigator.onLine);
    const setOnline = () => setOnlineStatus(true);
    const setOffline = () => setOnlineStatus(false);

    useEffect(() => {
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);
        
        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        }
    }, []);

    return onlineStatus;
};

export default useOnline;
