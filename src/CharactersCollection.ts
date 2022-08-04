import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  };

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    
    const leftChar = characters[leftIndex]; //armazena o menor numero
    characters[leftIndex] = characters[rightIndex]; //joga o menor numero para esquerda
    characters[rightIndex] = leftChar; //joga o maior numero para direita, pois o ultimo sera excluido no loop

    this.data = characters.join('');
  }
}