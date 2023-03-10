import { sha256 } from "js-sha256";

class KeyValuePair {
  key: string;
  value: any;
  next: null | KeyValuePair;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  count: number = 0;
  capacity: number;
  length: number;
  data: Array<KeyValuePair | null>;

  constructor(numBuckets = 4) {
    this.capacity = numBuckets;
    this.length = this.capacity;
    this.data = new Array(this.length).fill(null);
  }

  hash(key: string): number {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key: string): number {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key: string, value: any): void {
    const index = this.hashMod(key);
    if (this.data[index] != null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }
    this.data[index] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key: string, value: any): void {
    const index = this.hashMod(key);
    const pair = new KeyValuePair(key, value);
    if (this.data[index] != null) pair.next = this.data[index]!;
    this.data[index] = pair;
    this.count++;
  }

  insert(key: string, value: any): void {
    const index = this.hashMod(key);
    const pair = new KeyValuePair(key, value);
    if (this.data[index] == null) {
      this.data[index] = pair;
      this.count++;
      return;
    }
    let current = this.data[index];
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }
    pair.next = this.data[index]!;
    this.data[index] = pair;
    this.count++;
  }
}

export default HashTable;
