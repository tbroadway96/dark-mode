import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [storedValue, setValue] = useLocalStorage('darkMode', false);

    const flipBoolean = (value) => {
        setDarkMode(value);
        setValue(darkMode);
    }

    useEffect(() => {
        storedValue === true
            ? (document.body.className = 'dark-mode')
            : (document.body.className = '');
    }, [storedValue]);

    return [darkMode, flipBoolean];
}

export default useDarkMode;