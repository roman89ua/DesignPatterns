export class HttpRequest {
  private _useName: string;
  private _password: string;
  
  constructor(userName: string, password: string) {
    this._useName=userName;
    this._password=password;
  }
   getUseName(): string {
    return this._useName;
  }
  
   setUseName(value: string) {
    this._useName = value;
  }
  
  getPassword(): string {
    return this._password;
  }
  
  setPassword(value: string) {
    this._password = value;
  }
}
