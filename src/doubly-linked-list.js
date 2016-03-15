import {Node, List} from './single-linked-list';

export class DoublyNode extends Node {
  constructor(data) {
    super(data);

    this.prev = null;
  }
}

export class DoublyList extends List {
  constructor() {
    super();

    this.tail = null;
  }

  add(data) {
    const node = new DoublyNode(data);

    if (this.length) {
      this.tail.next = node;
      node.prev = tail;
      this.tail = node;
    } else {
      // insert the first item
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  remove(index) {
    if(super.isIndexInRange(index, this.length)) {
      if (index === 0) {
        this.head = this.head.next;

        if (this.head) {
          // still there are some items in the list
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      } else if (index === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {

        let current = this.head,
          i = 0;
        while(i++ !== index) {
          current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    } else {
      return null;
    }
  }
}
