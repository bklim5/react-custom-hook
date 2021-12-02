import useLocalStorage from './useLocalStorage';

const HookLocalStorageComponent = () => {
    const [storageLocale, setStorageLocale] = useLocalStorage('hookLocale', 'en-US');

    return (
        <>
            <p>[With custom hook] Current selected locale: {storageLocale}</p>
            <div style={{
                display: 'inline-block',
            }}>
                <button onClick={() => setStorageLocale('en-US')}>en-US</button>
                <button onClick={() => setStorageLocale('zh-CN')}>zh-CN</button>
                <button onClick={() => setStorageLocale('fr-FR')}>fr-FR</button>
            </div>
        </>
    )

};

export default HookLocalStorageComponent;
