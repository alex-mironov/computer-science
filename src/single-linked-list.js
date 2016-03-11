export class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

export class List {

  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    if (this.length) {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);

    } else {
      this.head = new Node(value);
    }

    this.length++;
  }

  isIndexInRange(index, length) {
    return index > -1 && index < length;
  }

  itemAt(index) {
    if (this.isIndexInRange(index, this.length)) {

      let current = this.head,
        currIndex = 0;

      while (currIndex++ !== index) {
        current = current.next;
      }

      return current.data;

    } else {
      return null;
    }
  }

  remove(index) {
    if (this.isIndexInRange(index, this.length)) {
      let current = this.head,
        prev = null,
        tempIndex = 0;

      while (tempIndex++ !== index) {
        prev = current;
        current = current.next;
      }

      if (prev) {
        prev.next = current.next;
      } else {
        // removing the first item
        this.head = current.next;
      }

      current.next = null;
      this.length--;

      return current.data;
    } else {
      return null;
    }
  }

}
