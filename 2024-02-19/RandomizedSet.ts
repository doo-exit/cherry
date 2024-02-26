class RandomizedSet {
    set: Set<number>;
    array: Array<number>;

    constructor() {
        this.set = new Set<number>();
        this.array = new Array();
    }

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        }
        this.set.add(val);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (this.set.has(val)) {
            this.set.delete(val);
            this.array = this.array.filter((v) => v !== val);
            return true;
        }
        return false;
    }

    getRandom(): number {
        return this.array[Math.floor(this.array.length * Math.random())];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
