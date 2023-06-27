import { INode } from "./LinkedList";

export class Queue<T> {
  private queue: T[] = [];
  public enqueue(data: T) {
    this.queue.push(data);
  }
  public dequeue() {
    return this.queue.shift();
  }
  public show() {
    return this.queue;
  }
  public size() {
    return this.queue.length;
  }
}

/**
 * A game where a hot potato is passed between players until the time runs out
 * The class it's a circular queue
 * @constructor number of players
 */
export class HotPotato {
  private head: INode<string> | null = null;
  private numPlayers: number;
  constructor(players: number) {
    if (players < 2 || !Number.isInteger(players)) throw new Error("Players must be an integer greater than 1 ");
    this.numPlayers = players;
    this.add(players);
  }
  /**
   * Add numP players minus the player You
   * @param numP number of players
   */
  private add(numP: number) {
    this.head = new INode("You");
    let current = this.head;
    for (let i = 1; i < numP; i++) {
      const player = new INode(`Player ${i + 1}`);
      current.next = player;
      current = current.next;
    }
    current.next = this.head;
  }

  private remove(player: INode<string>) {
    let current = this.head;
    if (!current) {
      return;
    }
    let previous: INode<string> | null = null;
    while (current && current.data !== player.data) {
      previous = current;
      current = current.next;
    }
    if (!current) return;
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
  }

  private pass() {
    const timeBetweenPasses = Math.random() * 0.9;
    let timeOut = Math.random() + 1;
    let current = this.head;
    if (!current || !current.next) return;
    while (timeOut > 0) {
      current = current!.next;
      timeOut -= timeBetweenPasses;
    }
    this.remove(current!);
  }

  public play() {
    while (this.numPlayers > 1) {
      this.pass();
      this.numPlayers--;
    }
    return `The winner is ${this.head?.data}`;
  }
}
