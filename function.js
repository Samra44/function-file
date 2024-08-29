function add_number(){ //without perameter
    console.log("add two number",5+5)
    console.log("add two number")
}
// add_number()

function sum (a,b){ // with parameter
    console.log("sum of the two number is:" ,a+b)
}
sum(5,10)
sum(100,10)
sum(32,5,50,5)

function full_name(firstname,secondname){
    return firstname+secondname
}
let result = full_name("Dua","Ramsha")
console.log(result)
if(result=="DuaRamsha"){
    console.log("you are selected")
}else{
    console.log("you are not selected")
}

// arrow//