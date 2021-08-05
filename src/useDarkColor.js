import useLocalStorage from './useLocalStorage'

const useDarkColor = () => {

    const [darkMode, setDarkMode] =  useLocalStorage ("turnedOn", false)
    return [darkMode, setDarkMode]
}

export default useDarkColor;