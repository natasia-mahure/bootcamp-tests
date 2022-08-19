function countAllPaarl (string){

 let counter = 0;
 var regNumbers = string.split(',');
 for (var i=0; i<regNumbers.length; i++) {
 var regNumbersPaarl = regNumbers[i].trim()
 if (regNumbersPaarl.startsWith('CJ')){
 counter++
}
} return counter 
}