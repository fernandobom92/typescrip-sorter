import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if(!this.head) {
      this.head = node;
      return;
    }

    //navega até o fim da lista
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    //adiciona o nó no fim da lista
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;

    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('index não existe');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('index fora do alcance');

  }

  compare(leftIndex: number, rightIndex:number):boolean {
    if (!this.head) {
      throw new Error('lista vazia');
    }
    
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    
    const leftValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftValue;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    
    let node: Node | null = this.head;
    
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}