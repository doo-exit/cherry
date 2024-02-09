interface Value {
    value: string;
    timestamp: number;
}

class TimeMap {
    map: Map<string, Array<Value>>;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const data = {
            value, timestamp
        };

        if (this.map.has(key)) {
            this.map.get(key).push(data);
        } else {
            this.map.set(key, [data]);
        }
    }

    get(key: string, timestamp: number): string {
        const data = this.map.get(key);

        if (!data) {
            return "";
        }

        let left = 0, right = data.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const curr = data[mid];

            if (curr.timestamp === timestamp) {
                return curr.value;
            }

            if (curr.timestamp < timestamp) {
                const next = data[mid + 1];
                if (!next || next.timestamp > timestamp) {
                    return curr.value;
                }
            }

            if (curr.timestamp < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
