// Code your solutions in this file

//returns an array of thank you messages for each name provided to the function
const guests=["Guadalupe","Ollie","Aki"];
let bevent = "surprise"

const msgs = [];
function writeCards(guests,bevent){
    for ( let i = 0; i < guests.length; i++){
        //debugger;
        const msg = `Thank you, ${guests[i]}, for the wonderful ${bevent} gift!`;
        msgs.push(msg);
        //return (`Thank you, ${guests[i]}, for the wonderful ${bevent} gift!,`);
        //debugger;
        if(i == guests.length-1){
            console.log(msgs);
            return msgs;
        }
    }
}

//writeCards(guests,bevent); 

//logs each number when counting down, starting from the number provided
function countDown(){
    let i = 10;
    while ( i > -1){
        console.log(i);
        i--;
    }
    return i
}

countDown(); 