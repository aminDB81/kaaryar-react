export function readJSON(key) {
    try {
        const jsonString = localStorage.getItem(key);
        if (jsonString === null) {
            return null;
        }
        return JSON.parse(jsonString);
    } catch (error) {
        console.error(`Error reading JSON from localStorage for key ${key}:`, error);
        return null;
    }
}

export function writeJSON(key, data) {
    try {
        const jsonString = JSON.stringify(data);
        localStorage.setItem(key, jsonString);
    } catch (error) {
        console.error(`Error writing JSON to localStorage for key ${key}:`, error);
    }
}
