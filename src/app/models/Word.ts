export class Word{
  word: string;
  definition: string;
  setId: string;
  flipped: boolean;

  constructor(word: string, definition: string, setId?: string, flipped?: boolean) {
    this.word = word;
    this.definition = definition;
    this.setId = setId;
    this.flipped = flipped;
  }
}
