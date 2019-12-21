export class UserDTO {
  username: string;
  surname: string;
  name: string;
  password: string;
  points: number;
  mistakes: number;

  constructor(username: string, password: string, name?: string, surname?: string, points?: number, mistakes?: number) {
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
    this.points = points;
    this.mistakes = mistakes;
  }
}
