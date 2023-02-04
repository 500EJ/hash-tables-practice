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
  count: number;
  capacity: number;
  length: number;
  data: KeyValuePair[];

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.length = this.capacity;
    this.data = new Array(this.length);
  }

  hash(key) {
    // Your code here
  }

  hashMod(key) {
    // Your code here
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
