import { LOCAL_STORE_PREFIX } from "constants";

export default class Storage {
    static prefix = LOCAL_STORE_PREFIX;

    static getItem(name) {
        return JSON.parse(localStorage.getItem(this.prefix + name) || 'null');
    }

    static setItem(name, value) {
        localStorage.setItem(this.prefix + name, JSON.stringify(value));
    }

    static removeItem(name) {
        return localStorage.removeItem(this.prefix + name);
    }
}