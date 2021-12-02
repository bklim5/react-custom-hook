import useToggle from './useToggle';

const ToggleCheckbox = () => {
    const [val, toggleVal] = useToggle(false); // default not toggled

    return (
        <label>
            <input type="checkbox" checked={val} onChange={toggleVal} />
            Toggle Checkbox
        </label>
    );
};

export default ToggleCheckbox;
