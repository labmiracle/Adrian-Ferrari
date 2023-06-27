import { areThereDuplicates, concatUniques } from "../Set";
import { LinkedList, DblLinkedList } from "../LinkedList";
import { BinaryStack } from "../Stack";
import { HotPotato, Queue } from "../Queue";
import { TreeB } from "../Tree";

describe("Data Structures", () => {
  test("LinkedList", () => {
    const lista = new LinkedList<number>();
    lista.add(1);
    lista.add(5);
    lista.add(12);
    lista.add(7);
    lista.add(7);
    lista.deleteDups();
    expect(lista.show()).toBe("1=>5=>12=>7");
    lista.inverse();
    expect(lista.show()).toBe("7=>12=>5=>1");
    expect(lista.size).toBe(4);
    expect(lista.find((i) => i > 5)).toBe(7);
    lista.remove(7);
    expect(lista.size).toBe(3);
    expect(lista.find((i) => i > 5)).toBe(12);
  });

  test("DblLinkedList", () => {
    const dblLista = new DblLinkedList<number>();
    dblLista.add(6);
    dblLista.add(5);
    dblLista.add(10);
    dblLista.add(15);
    dblLista.add(5);
    expect(dblLista.show()).toBe("6=>5=>10=>15=>5");
    dblLista.inverse();
    expect(dblLista.show()).toBe("5=>15=>10=>5=>6");
    dblLista.remove(10);
    expect(dblLista.show()).toBe("5=>15=>5=>6");
    dblLista.deleteDups();
    expect(dblLista.show()).toBe("5=>15=>6");
  });

  test("Stack", () => {
    const stack = new BinaryStack();
    stack.push(25, 2);
    stack.push(123, 36);
    stack.push(123, 22);
    expect(stack.show()).toEqual(["11001", "3f", "5d"]);
    stack.pop();
    expect(stack.size()).toBe(2);
  });

  test("Queue", () => {
    const queue = new Queue<string>();
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");
    queue.dequeue();
    expect(queue.show()).toEqual(["second", "third"]);
  });

  test("Hot Potato game", () => {
    const game = new HotPotato(6);
    expect(game.play()).toMatch(/The winner is (You|Player [2-6])/);
  });

  test("Tree", () => {
    const tree = new TreeB();
    tree.insert(14);
    tree.insert(22);
    tree.insert(12);
    tree.insert(13);
    tree.insert(20);
    tree.insert(6);
    /******************
              14
            /    \
          12      22
         /   \   /
        6    13 20
    ******************/

    expect(tree.inorder()).toEqual([6, 12, 13, 14, 20, 22]);
    expect(tree.preorder()).toEqual([14, 12, 6, 13, 22, 20]);
    expect(tree.postorder()).toEqual([6, 13, 12, 20, 22, 14]);
    expect(tree.count()).toBe(6);
    expect(tree.max()).toBe(22);
    expect(tree.min()).toBe(6);
  });
});
