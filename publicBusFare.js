function publicBusFare(publics){
   if(publics <= 50){
    return 0;
   }
   else if(publics > 50){
    let rem1 = publics % 50;
    if(rem1 > 11){
        let rem2 = rem1 % 11;
        let fare1 = rem2 * 250
        return fare1;
    }
    else if(rem1 < 11){
        fare2 = rem1 * 250;
        return fare2;
    }
   }
}

let fare = publicBusFare(365);
console.log(fare);