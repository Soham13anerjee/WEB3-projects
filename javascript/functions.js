function sample(){
    // return undefined or
    return //empty return. it will also return undefined
}

function sum(number1, number2){
    console.log(number2)
    console.log("sum is", number1+number2)
}

sum(10,100) // 110 output
sum(1) // number2 is undefined and sum is NaN i.e. not a number

// return keyword
// no return means JS returns undefined implicitly

function retNewAge(old_age){
    return (old_age + 100)/2
}

console.log("old age", 25, "retirement age", retNewAge(25))