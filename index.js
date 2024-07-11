// Code your solutions in this file
function writeCards(names, type) {
    let message = [];
    for (let i = 0;
        i < names.length;
        i++)
    {
        message.push (`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return message
}

function countDown (n) {
    let x = -1;
    while (n > x){
        console.log(n--)
    }
}