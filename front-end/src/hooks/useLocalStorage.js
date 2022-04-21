import { useCallback, useState } from 'react';

const useLocalStorage = (key, initialState = '') => {
  const [state, setState] = useState(() => {
    try {
      const storeValue = localStorage.getItem(key);

      return storeValue ? JSON.parse(storeValue) : initialState;
    } catch {
      return initialState;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      console.log(error);
    }
  }, [key]);
  return [state, setValue];
};

export default useLocalStorage;

/*
  import { useEffect, useState } from 'react';

  const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    const getStorage = localStorage.getItem(key);
    return getStorage ? JSON.parse(getStorage) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage; */
