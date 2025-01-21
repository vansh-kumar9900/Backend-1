let array = [1,2,3,4,5];
let totalElem = array.length;
let maxelem = array[0];
for(let i = 0; i < totalElem ; i++){
    if(array[i] > maxelem){
        maxelem = array[i];
    }
}
console.log(maxelem);s