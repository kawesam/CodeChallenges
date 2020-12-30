fibonacci = () => {
    let a = 1, b = 0, temp,sum=0;

    while (a <= 4000000){
        temp = a;
        a = a + b;
        b = temp;
        if(b % 2 ===0){
            sum +=b;

        }

    }
    console.log(sum);
}
 fibonacci();

