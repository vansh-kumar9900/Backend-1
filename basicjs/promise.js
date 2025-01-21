function vanshKumar(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            console.log("hey there");
            resolve("vansh this side!");
        },2000);
    })
    return p;

}
setTimeout(function(){
    for(let i = 0 ; i < 4 ; i++){
        console.log(i);
    }
},1499)

console.log("uff");

let fun = vanshKumar();
fun.then(function(value){
    console.log(value);
    console.log("ohho");
})
/////////////////// PROMISE^ //////////////////////////////////////



/////////////////// ASYNC & AWAIT /////////////////////////////////


function asyncVanshfun(){
    let promises =  new Promise(function(resolve){
        setTimeout(function(){
            console.log("hey there");
            resolve("resolved");
            console.log("heyhey");
        },3000)
    })
    return promises;
}

async function vansh(){
    let p =  await asyncVanshfun();
    console.log(p);
    console.log("vansh this side!");
}

vansh();