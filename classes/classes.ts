class Prova {
  private _a : number;
  private _b : string;

  set a(value:number)
  {
    this._a = value;
  }

  get a() {
    return this._a;
  }
}

let x = new Prova();
x.a = 10;
