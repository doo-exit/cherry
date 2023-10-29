class LRUCache {
    private capacity: number;
    private map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    private update(key: number, value: number): void {
        this.map.delete(key);
        this.map.set(key, value);
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }

        const value = this.map.get(key);
        this.update(key, value);

        return value;
    }

    put(key: number, value: number): void {
        if (!this.map.has(key) && this.map.size >= this.capacity) {
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);
        }
        this.update(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
