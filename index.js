export function createStore() {
    const data = new Map();
    const listeners = new Set();

    const store = {
        set(key, value) {
            const prev = data.get(key);

            if (!Object.is(prev, value)) {
                data.set(key, value);

                listeners.forEach(listener => {
                    listener(key, value, prev);
                });
            }
        },

        get(key) {
            return data.get(key);
        },

        subscribe(listener) {
            listeners.add(listener);
        },

        unsubscribe(listener) {
            listeners.delete(listener);
        }
    };

    return store;
}
