import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultvalue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        return defaultvalue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue]);

    return [value, setValue];
};

export default useLocalStorage