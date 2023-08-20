function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(var i = 2; i < num; i++){
        if(num % 2 == 0){
            return false;
        }
    }
    return true;
}

for(var i = 0; i <=11; i++){
    if(isPrime(i)){
        console.log(i);
    }
}