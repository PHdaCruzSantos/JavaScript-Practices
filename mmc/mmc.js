function multiple(x, y) {
    return x % y === 0;
}
function resolve(num1, num2) {
    let mmc = 1;
    while(!(multiple(mmc, num1) && multiple(mmc, num2))){
        mmc++;
    }
    return mmc;
}

console.log(resolve(3,4));