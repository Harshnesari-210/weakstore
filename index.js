function createPrivateStore() {
    const store = new WeakMap();

    return {
        set(obj, key, value) {
            if (!store.has(obj)) store.set(obj, {});
            store.get(obj)[key] = value;
        },

        get(obj, key) {
            if (!store.has(obj)) return undefined;
            return store.get(obj)[key];
        },

        has(obj, key) {
            return store.has(obj) && key in store.get(obj);
        },

        delete(obj, key) {
            if (!store.has(obj)) return false;
            return delete store.get(obj)[key];
        }
    };
}
export default createPrivateStore;
