import { useState } from 'react';

const NoHookToggleButton = () => {
    const [val, setVal] = useState(false);
    const toggleVal = () => setVal(!val);

    return (
        <button onClick={toggleVal}>
            {
                val ? 'Toggled' : 'Not toggled'
            }
        </button>
    );
};

export default NoHookToggleButton;
