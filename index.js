// const friends =["Guadalupe", "Ollie", "Aki"]
// let event = surprise

function writeCards(friends, event){
    let thankYouCard = []
    for(let i = 0; i < friends.length; i++ ) {
    thankYouCard.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCard
}

function countDown(){
let i = 11
while(i > 0 )
console.log(i-=1)
}