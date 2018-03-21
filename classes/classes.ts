class Prova {
  private _a : number;

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

// Declare a tuple type
let tuple: [string, number];
tuple = ["hello", x.a]; // OK
