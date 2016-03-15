if(module.hot) {
  // accept itself
  module.hot.accept();
}

import {List, Node} from './single-linked-list';
import {DoublyList, DoublyNode} from './doubly-linked-list';
import insertionSort from './insertion-sort';
import binarySearch from './binary-search';

// const t = new List();

// t.add('hello');
// t.add('world');

// console.dir(t);

// var sortedItems = insertionSort([1, -1, 0, 10, 4]);
// console.log(sortedItems);

var items = ["a","b","c","d","e","f","g","h","i","j"];
console.log(binarySearch(items, "i"));
console.log(binarySearch(items, "b"));
console.log(binarySearch(items, "l"));
