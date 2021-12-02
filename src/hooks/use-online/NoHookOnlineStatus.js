import { useState, useEffect } from 'react';

const NoHookOnlineStatus = () => {
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

    return (
        <p>
            Network status (without custom hook):
            &nbsp;
            <span style={{
                color: onlineStatus ? 'green': 'red'
            }}>
                { onlineStatus ? 'Connected' : 'Not connected' }
            </span>
        </p>
    );
};

export default NoHookOnlineStatus;
