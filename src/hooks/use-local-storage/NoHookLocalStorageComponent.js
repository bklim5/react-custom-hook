import { useState } from 'react';

const NoHookLocalStorageComponent = () => {
    const [storageLocale, setStorageLocale] = useState(() => window.localStorage.getItem('locale') || 'en-US');

    const setLocale = (val) => {
        window.localStorage.setItem('locale', val);
        setStorageLocale(val);
    }

    return (
        <>
            <p>[Without custom hook] Current selected locale: {storageLocale}</p>
            <div style={{
                display: 'inline-block',
            }}>
                <button onClick={() => setLocale('en-US')}>en-US</button>
                <button onClick={() => setLocale('zh-CN')}>zh-CN</button>
                <button onClick={() => setLocale('fr-FR')}>fr-FR</button>
            </div>
        </>
    )

};

export default NoHookLocalStorageComponent;
