export class WashingMachine {
  private static instance: WashingMachine;
  private usersList: Map<string, object> = new Map();
  private constructor() {
  }

  static getInstance(): WashingMachine {
    if(!WashingMachine.instance)
      WashingMachine.instance = new WashingMachine();

    return WashingMachine.instance;
  }
  add(apartment: string, user: object) {
    this.usersList.set(apartment, user);
  }
  get(apartment: string) {
    return this.usersList.has(apartment) &&  this.usersList.get(apartment);
  }
}