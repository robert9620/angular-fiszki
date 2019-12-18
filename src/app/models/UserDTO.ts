export class UserDTO {
  private username: string;
  private surname: string;
  private name: string;
  private password: string;

  constructor(username: string, password: string, name?: string, surname?: string) {
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
  }

  getName(): string {
    return this.username;
  }

  setName(value: string) {
    this.username = value;
  }

  getSurname(): string {
    return this.surname;
  }

  setSurname(value: string) {
    this.surname = value;
  }

  getLogin(): string {
    return this.name;
  }

  setLogin(value: string) {
    this.name = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }
}
