let demoObject = [
    {name:"abul", friend:"babul"},
];
let demoObject2 = [
    {name:"babul", friend:"abul"},
];
function isFriend(A,B){
    if(A[0].name === B[0].friend && A[0].friend === B[0].name){
        return true;
    }
    else{
        return false;
    }
}
let out = isFriend(demoObject, demoObject2);
console.log(out);