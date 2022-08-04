import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([90, -35, 56, -7, 67, 100, -56, 987]);
numbersCollection.sort();
console.log(numbersCollection.data);
 
const charactersCollection = new CharacterCollection('Xaaaaaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();