import useToggle from './useToggle';

const ToggleButton = () => {
    const [val, toggleVal] = useToggle(false); // default not toggled

    return (
        <button onClick={toggleVal}>
            {
                val ? 'Toggled' : 'Not toggled'
            }
        </button>
    );
};

export default ToggleButton;
