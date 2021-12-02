import { useState } from 'react';

const useToggle = (defaultVal) => {
    const [val, setVal] = useState(defaultVal);
    const toggleVal = () => setVal(!val);

    return [val, toggleVal];
}

export default useToggle;
