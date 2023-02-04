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
  data: KeyValuePair[];

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

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }
}

export default HashTable;
