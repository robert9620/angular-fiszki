export class Word{
  word: string;
  definition: string;
  setId: string

  constructor(word, definition, setId?) {
    this.word = word;
    this.definition = definition;
    this.setId = setId;
  }
}
