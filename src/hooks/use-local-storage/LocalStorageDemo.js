import HookLocalStorageComponent from './HookLocalStorageComponent';
import NoHookLocalStorageComponent from './NoHookLocalStorageComponent';


const LocalStorageDemo = () => {
    return (
        <>
            <NoHookLocalStorageComponent />
            <br />
            <HookLocalStorageComponent />
        </>
    );
}

export default LocalStorageDemo;
