const diselPerLittre = 114;
const patrolPerLittre = 130;
const octanePerLittre = 135;
function oilPrice(disel, patrol , octan){
    let sumDisel = diselPerLittre * disel;
    let sumPatrol = patrolPerLittre * patrol;
    let sumOctane = octanePerLittre * octan;
    let sumTotal = sumDisel + sumOctane  + sumPatrol;
    return sumTotal;  
}

let totalPrice = oilPrice(1,1,1);
console.log(totalPrice);