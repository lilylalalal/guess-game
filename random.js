
function randomInRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomInRange(1, 3)); // 16
console.log(randomInRange(1, 3)); // 17
console.log(randomInRange(1, 3))//20