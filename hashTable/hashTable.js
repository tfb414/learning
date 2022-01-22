const hash = (key, size) => {
    let hashedKey = 0;

    for (let i = 0; i < key.length; i++){
        hashedKey += key.charCodeAt(i);
    }

    return hashedKey % size;
};

class HashTable {
    constructor(){
        this.size = 10;
        this.buckets = new Array(this.size);

         for(let i = 0; i < this.buckets.length; i++){
             this.buckets[i] = new Map();
         }
    }


    print(){
        console.log(this.buckets);
    }

    insert(key, value){
        let index = hash(key, this.size);

        this.buckets[index].set(key, value);
    }

    remove(key){
        let index = hash(key, this.size);
        let removedItem = this.buckets[index].get(key);

        this.buckets[index].delete(key)

        return removedItem
    }

    search(key){
        let index = hash(key, this.size)

        return this.buckets[index].get(key);

    }
}

const hashTable = new HashTable();

hashTable.print();
hashTable.insert("test", "value");
hashTable.insert("test2", "value2");
hashTable.insert("test3", "value3");
hashTable.print();
hashTable.remove("test2");
hashTable.print();

console.log(hashTable.search("test3"));
