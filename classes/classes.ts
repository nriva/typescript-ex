import {LabeledValue} from '../interface/interface'

class Prova  {
  private _a : number;
  private _b : string;

  private lv : LabeledValue = {label:""};

  set a(value:number)
  {
    this._a = value;
  }

  get a() {
    return this._a;
  }

  set label(value:string)
  {
    this.lv.label = value;
  }

  toString()
  {
    if(this.lv && this.lv.label && this.lv.label!="")
      return this.lv.label + " : " + this._a;

    return this._a;
  }
}

let x = new Prova();
x.a = 10;

x.label = "Label";

console.log(x.toString());
