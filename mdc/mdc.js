const list = [10, 20, 30, 90];//MDC =  10

function resolve() {
    let mdc = 1;

    for(let i = 100; i > 1; i--){

        let isMdc = true;

        list.forEach((num) => {
            if(!(num % i === 0 )) isMdc = false;
        })
        
        if(isMdc){
            mdc = i;
            break;
        }
    }
    return mdc;
}
console.log(resolve());