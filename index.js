function writeCards(array, eventName){
    const holdingArray = []
    for (let i=0; i < array.length; i++) {
        holdingArray[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    }
    return holdingArray
}

function countDown(num) {
   let myBoyCarlos = num
    while (myBoyCarlos >= 0) {
        console.log(myBoyCarlos--)
    }
}