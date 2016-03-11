if(module.hot) {
  // accept itself
  module.hot.accept();
}

import {List, Node} from './single-linked-list';
import insertionSort from './insertion-sort';

const t = new List();

t.add('hello');
t.add('world');

console.dir(t);

var sortedItems = insertionSort([1, -1, 0, 10, 4]);
console.log(sortedItems);
