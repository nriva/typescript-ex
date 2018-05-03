class Prova {
  private _a : number=0;
  private _b : string="";

  set a(value:number)
  {
    this._a = value;
  }

  get a() {
    return this._a;
  }

  Prova(a:number,b:string)
  {
    this._a = a;
    this._b = b;
  }
}

let x = new Prova();
x.a = 10;
