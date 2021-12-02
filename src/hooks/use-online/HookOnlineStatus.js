import useOnline from './useOnline';

const HookOnlineStatus = () => {
    const onlineStatus = useOnline();

    return (
        <p>
            Network status (with custom hook):
            &nbsp;
            <span style={{
                color: onlineStatus ? 'green': 'red'
            }}>
                { onlineStatus ? 'Connected' : 'Not connected' }
            </span>
        </p>
    );
};

export default HookOnlineStatus;
