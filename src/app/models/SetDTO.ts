export class SetDTO {
  id: string;
  name: string;
  user
  favourite: string;

  constructor(id: string, name: string, user, favourite: string) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.favourite = favourite;
  }
}
