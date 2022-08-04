"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    ;
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftChar = characters[leftIndex]; //armazena o menor numero
        characters[leftIndex] = characters[rightIndex]; //joga o menor numero para esquerda
        characters[rightIndex] = leftChar; //joga o maior numero para direita, pois o ultimo sera excluido no loop
        this.data = characters.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
