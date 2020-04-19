class TheHashTable {
    size = null;
    values = {};
    numberOfValues = 0;

    constructor(size) {
        this.size = size;
    }

    calculateHash(key) {
        return key.toString().length % this.size;
    }

    add(key, value) {
        const hash = this.calculateHash(key);

        if (! Object.prototype.hasOwnProperty.call(this.values, hash)) {
            this.values[hash] = {};
        }

        if (! Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
            this.numberOfValues++;
        }

        this.values[hash][key] = value;
    }

    remove(key) {
        const hash = this.calculateHash(key);

        if (
            Object.prototype.hasOwnProperty.call(this.values, hash)
            &&
            Object.prototype.hasOwnProperty.call(this.values[hash], key)
        ) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }

    search(key) {
        const hash = this.calculateHash(key);

        if (
            Object.prototype.hasOwnProperty.call(this.values, hash)
            &&
            Object.prototype.hasOwnProperty.call(this.values[hash], key)
        ) {
            return this.values[hash][key];
        }

        return null;
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        let string = '';

        for (let value in this.values) {
            for (let key in this.values[value]) {
                string += `${this.values[value][key]} `;
            }
        }

        console.log(string.trim());
    }
}

// Example

console.log('------>>>>- Hash Table ----');

const hashTable = new TheHashTable(3);

hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);

hashTable.print();

console.log('Length gives 5:', hashTable.length());
console.log('Search second gives 2:', hashTable.search('second'));

hashTable.remove('fourth');
hashTable.remove('first');

hashTable.print();

console.log('Length gives 3:', hashTable.length());

console.log('------<<<<-----');
