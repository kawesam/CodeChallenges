fib = function(n){
    if(n<1){
        return 0;
    }else if(n<=2){
        return 1;
    }else{
        return (fib(n-1) + fib(n-2));
    }
}

console.log(fib(13));
