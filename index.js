function writeCards(arrayOfStrings, eventName){
    const holdingArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++){
        holdingArray.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${eventName} gift!`)
        console.log(i)
    }
    return holdingArray
}
const names = ['Jim', 'Larry', 'Nandini']
const Christmas = `Christmas`
console.log(writeCards(names, Christmas))


function countDown(x) {
    
    while (x > -1) {
        console.log(x--)
    }
}
countDown(10)