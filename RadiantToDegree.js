function RadiantToDegree(input){
    const pi = 3.1416
    let convert = (180 / pi) * input;
    convert = convert.toFixed(2);
    return convert;
}

let radiant = RadiantToDegree(10);
console.log(radiant); 