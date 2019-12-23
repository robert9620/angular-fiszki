export class DefaultSetDTO {
  id: string;
  name: string;
  wordsAmount: number;

  constructor(id: string, name: string, user, wordsAmount: number) {
    this.id = id;
    this.name = name;
    this.wordsAmount = wordsAmount;
  }
}
