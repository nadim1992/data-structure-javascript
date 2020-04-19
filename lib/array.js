"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TheArray = /*#__PURE__*/function () {
  function TheArray() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TheArray);

    _defineProperty(this, "array", []);

    this.array = array;
  }

  _createClass(TheArray, [{
    key: "add",
    value: function add(data) {
      this.array.push(data);
    }
  }, {
    key: "remove",
    value: function remove(data) {
      this.array = this.array.filter(function (current) {
        return current !== data;
      });
    }
  }, {
    key: "search",
    value: function search(data) {
      var foundIndex = this.array.indexOf(data);

      if (foundIndex !== -1) {
        return foundIndex;
      }

      return null;
    }
  }, {
    key: "getAtIndex",
    value: function getAtIndex(index) {
      return this.array[index];
    }
  }, {
    key: "length",
    value: function length() {
      return this.array.length;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this.array.join(' '));
    }
  }]);

  return TheArray;
}(); // Example


console.log('------>>>>- Array ----');
var array = new TheArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print();
console.log('Search 3 gives index 2:', array.search(3));
console.log('Get index 2 gives 3:', array.getAtIndex(2));
console.log('Length is 4:', array.length());
array.remove(3);
array.print();
array.add(5);
array.add(5);
array.print();
array.remove(5);
array.print();
console.log('------<<<<-----');