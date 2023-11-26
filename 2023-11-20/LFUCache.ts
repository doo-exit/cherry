class Info {
  value: number;
  count: number;

  constructor(value: number, count: number) {
    this.value = value;
    this.count = count;
  }
}

class LFUCache {
  capacity: number;
  map: Map<number, Set<number>>;
  cache: Map<number, Info>;
  min: number = -1;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, Set<number>>();
    this.cache = new Map<number, Info>();
  }

  private insert(key: number, value: number, count: number) {
    if (!this.map.has(count)) {
      this.map.set(count, new Set<number>());
    }
    this.map.get(count).add(key);
    this.cache.set(key, new Info(value, count));
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const info = this.cache.get(key) as Info;
    const set = this.map.get(info.count);
    set.delete(key);

    if (set.size === 0 && info.count === this.min) {
      this.min += 1;
    }

    info.count += 1;
    this.insert(key, info.value, info.count);

    return info.value;
  }

  put(key: number, value: number): void {
    if (this.capacity <= 0) return;

    if (this.cache.has(key)) {
      const info = this.cache.get(key) as Info;
      info.value = value;
      this.cache.set(key, info);
      this.get(key);
      return;
    }

    if (this.cache.size >= this.capacity) {
      const set = this.map.get(this.min);
      for (const key of set) {
        this.cache.delete(key);
        set.delete(key);
        break;
      }
    }

    const info = new Info(value, 1);
    this.min = 1;
    this.insert(key, info.value, info.count);
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
