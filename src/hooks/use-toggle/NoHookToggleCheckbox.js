import { useState } from 'react';

const NoHookToggleCheckbox = () => {
    const [val, setVal] = useState(false);
    const toggleVal = () => setVal(!val);

    return (
        <label>
            <input type="checkbox" checked={val} onChange={toggleVal} />
            No Hook Toggle Checkbox
        </label>
    );
};

export default NoHookToggleCheckbox;
