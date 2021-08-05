import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

const [storageValue, setStorageValue] = useState(() => {const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
const setValue = value => {
setStorageValue(value);
    
window.localStorage.setItem(key, JSON.stringify(value));
  };
return [storageValue, setValue];
};

export default useLocalStorage;