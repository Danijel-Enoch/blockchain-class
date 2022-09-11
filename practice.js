/**
 * Object destructing
 * Modules Import and Eport 
 * Async functions and Promises
 */

const house={
    sittingRoom:{
        entertainmentRoom:["Tv","Dstv","AirPlay",],
        furnitures:["Tables","chairs","BookShelf"],
        electronics:["Fan","Ac","Sound System"]
    },
    dinningRoom:["table","chair"],
    bedRoom:["Bed","Warddrobe","Lampstand"],
    owner:"Banke",
    amountOfChild:5,
    amountOfWives:2,
    namesOfchildren:["Jide","MIcheal","Bisi","Israel","Ayo"],
    namesOfWives:["Mummy Jide","Iya Bisi"]
}
const {sittingRoom:{furnitures}}=house;

// console.log(furnitures[2]);

module.exports ={house}