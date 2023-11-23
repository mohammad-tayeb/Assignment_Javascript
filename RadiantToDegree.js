function radiantToDegree(input){
    const pi = 3.1416
    let convert = (180 / pi) * input;
    convert = convert.toFixed(2);
    return convert;
}

let radiant = radiantToDegree(10);
console.log(radiant); 