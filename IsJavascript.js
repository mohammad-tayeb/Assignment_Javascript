function isJavascriptFile(names){
    if(names.includes('.js') === true){
        return true;
    }
    else{
        return false;
    }
}
let fileName = isJavascriptFile('index.js')
console.log(fileName);