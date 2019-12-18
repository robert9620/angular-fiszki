export class LoggedUser {
  private username: string;
  private token: string;

  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }
}
