class Pair<T1, T2> {
    constructor(public item1: T1, public item2: T2) { }
};

class TwoArrays<T> extends Pair<T[], T[]> { };


var ta = new TwoArrays<String>([],[]);
