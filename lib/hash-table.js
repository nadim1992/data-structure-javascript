"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TheHashTable = /*#__PURE__*/function () {
  function TheHashTable(size) {
    _classCallCheck(this, TheHashTable);

    _defineProperty(this, "size", null);

    _defineProperty(this, "values", {});

    _defineProperty(this, "numberOfValues", 0);

    this.size = size;
  }

  _createClass(TheHashTable, [{
    key: "calculateHash",
    value: function calculateHash(key) {
      return key.toString().length % this.size;
    }
  }, {
    key: "add",
    value: function add(key, value) {
      var hash = this.calculateHash(key);

      if (!Object.prototype.hasOwnProperty.call(this.values, hash)) {
        this.values[hash] = {};
      }

      if (!Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
        this.numberOfValues++;
      }

      this.values[hash][key] = value;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var hash = this.calculateHash(key);

      if (Object.prototype.hasOwnProperty.call(this.values, hash) && Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
      }
    }
  }, {
    key: "search",
    value: function search(key) {
      var hash = this.calculateHash(key);

      if (Object.prototype.hasOwnProperty.call(this.values, hash) && Object.prototype.hasOwnProperty.call(this.values[hash], key)) {
        return this.values[hash][key];
      }

      return null;
    }
  }, {
    key: "length",
    value: function length() {
      return this.numberOfValues;
    }
  }, {
    key: "print",
    value: function print() {
      var string = '';

      for (var value in this.values) {
        for (var key in this.values[value]) {
          string += "".concat(this.values[value][key], " ");
        }
      }

      console.log(string.trim());
    }
  }]);

  return TheHashTable;
}(); // Example


console.log('------>>>>- Hash Table ----');
var hashTable = new TheHashTable(3);
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