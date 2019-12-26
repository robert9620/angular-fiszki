export class SettingDTO {
  id :number;
  changedOrder: boolean;
  counter: boolean;
  styledFont: boolean;
  user: string;

  constructor(id?: number, changedOrder?: boolean, counter?: boolean, styledFont?: boolean, user?: string) {
    this.id = id;
    this.changedOrder = changedOrder;
    this.counter = counter;
    this.styledFont = styledFont;
    this.user = user;
  }
}
