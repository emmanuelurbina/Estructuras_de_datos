class HashTable {
    constructor(size) {
        // size es el tamaño del nuevo array
        this.data = new Array(size);
    }

    hashMethod(key) {
        // hash function ya esta predefinida, hay varios metodos
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) return currentBucket[i][1];
            }
        }
        return undefined;
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            this.data.splice(address, 1, []);
            return this.data;
        }
        return undefined;
    }

    getAllKeys() {
        const new_arr = [];


        for (let index = 0; index < this.data.length; index++) {
            if (this.data[index]) {
                for (let i = 0; i < this.data[index].length; i++) {
                    new_arr.push(this.data[index][i][0]);
                }
            }
        }
        return (new_arr.length > 0) ? new_arr : undefined;
    }
}






