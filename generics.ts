function genericFunc<T> (argument: T): T[]{
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); 