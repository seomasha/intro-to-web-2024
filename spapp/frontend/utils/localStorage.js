var LocalStorage = {
    setToLocalStorage: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    
    getFromLocalStorage: (key) => {
        return JSON.parse(window.localStorage.getItem(key));
    }
}