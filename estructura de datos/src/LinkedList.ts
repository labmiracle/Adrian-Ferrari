export class INode<T> {
  public data;
  public next: INode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}

/**
 * A Linked List.
 * @class
 */

export class LinkedList<T> {
  protected head: INode<T> | null = null;
  public size: number = 0;

  /**
   * Adds a node with a specific value at the end of the list.
   */
  public add(data: T) {
    const node = new INode(data);
    let current = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (current?.next) {
        current = current.next;
      }
      current!.next = node;
    }
    this.size++;
  }

  /**
   * Remove a node with a specific value from the list.
   */
  public remove(data: T) {
    let current = this.head;
    if (!current) {
      return;
    }
    let previous;
    while (current && current.data !== data) {
      previous = current;
      current = current.next;
    }
    if (!current) return;
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
  }

  /**
   * Returns the data from the first node that passed the testing function or undefined if none did.
   */
  public find(compare: (data: T) => boolean) {
    let current = this.head;
    if (!current) return;
    while (!compare(current.data)) {
      if (!current.next) return;
      current = current.next;
    }
    return current.data;
  }

  /**
   * Invert the list.
   */
  public inverse() {
    let current = this.head;
    let prev: INode<T> | null = null;
    let next: INode<T> | null = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  /**
   * Delete duplicates.
   */
  public deleteDups() {
    let current = this.head;
    if (!current) return;
    let nodups = new Set<T>();
    while (current) {
      nodups.add(current.data);
      this.remove(current.data);
      current = current.next;
    }
    nodups.forEach((e) => this.add(e));
  }

  /**
   * Shows the elements of the list in order.
   * @returns string
   */
  public show() {
    let current = this.head;
    let string = [];
    if (!current) {
      return;
    }
    while (current) {
      string.push(`${current.data}`);
      current = current.next;
    }
    return string.join("=>");
  }
}

class DblNode<T> extends INode<T> {
  public next: DblNode<T> | null = null;
  public prev: DblNode<T> | null = null;
  constructor(data: T) {
    super(data);
  }
}

export class DblLinkedList<T> extends LinkedList<T> {
  protected head: DblNode<T> | null = null;
  public add(data: T) {
    const node = new DblNode(data);
    let current = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (current?.next) {
        current = current.next;
      }
      current!.next = node;
      node.prev = current;
    }
    this.size++;
  }
  public remove(data: T) {
    let current = this.head;
    if (!current) {
      return;
    }
    while (current && current.data !== data) {
      current = current.next;
    }
    if (!current) return;
    if (!current.prev) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
    } else {
      current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
    }
    this.size--;
  }
  public inverse() {
    let current = this.head;
    let prev: DblNode<T> | null = null;
    while (current) {
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }
    if (prev) this.head = prev.prev;
  }
}
