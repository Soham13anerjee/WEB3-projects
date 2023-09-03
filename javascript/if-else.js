function ifLicense(age){
    if(age>=18){
        return "approved for license application"
    }else{
        return "not approved for license application"
    }
}

ifLicense(20)

// falsey value -> undefined, false, null, 0, 

// logical operator -> &&, ||