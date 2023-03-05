
/** 
 * Stores access token and profile details in local storage
 * @param {string} key
 * @param {number} key
 */



export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  
  export function remove(key) {
    localStorage.removeItem(key);
  }
  
  export function clear() {
    localStorage.clear;
  }