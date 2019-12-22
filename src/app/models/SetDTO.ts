export class SetDTO {
  id: string;
  name: string;
  user
  favourite: number;
  wordsAmount: number;

  constructor(id: string, name: string, user, favourite: number) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.favourite = favourite;
  }
}
