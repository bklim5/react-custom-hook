import { useState } from 'react';

const useLocalStorage = (key, defaultVal) => {
    const [storageVal, setStorageVal] = useState(() => window.localStorage.getItem(key) || defaultVal || '');
    
    const setVal = (val) => {
        setStorageVal(val);
        window.localStorage.setItem(key, val);
    }

    return [storageVal, setVal];
};

export default useLocalStorage;
