var deck =  [{ code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
            { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
            { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
            { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
            { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
            { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
            { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
            { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
            { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
            { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
            { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
            { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
            { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
            { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
            { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
            { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
            { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
            { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
            { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
            { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
            { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
            { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
            { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
            { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
            { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
            { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
            { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
            { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
            { code:'&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
            { code:'&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
            { code:'&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
            { code:'&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
            { code:'&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
            { code:'&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
            { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
            { code:'&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
            { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
            { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
            { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
            { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
          ];


///dealing the cards for the array
function dealHand(deck, num){
  ////deckcopy used to ensure original deck remains the same, if you pass slice
  //zero arguements, returns a copy of the original
  var deckCopy = deck.slice();
  ///optional if you don't pass in argument to num, it will default to 1
  if(num===undefined) {
    num = 1;
  }
  ///randomized card from the deck
  var hand = [];
  for(var i=0;i<num;i++){
    //math.floor rounds down to nearest integer,
    //math.random is a # between 0-1, and arrayCopy.length multiplies
    var index = Math.floor(Math.random()*deckCopy.length);
    console.log("random number " +index)
    // randArray.push(arrayCopy.splice(index,1)[0]);
    //deckcopy used to ensure original deck remains the same
    //returns card value packaged in array
    var cardArray = deckCopy.splice(index,1)
    console.log("card array " + cardArray)
    ///use to extract value from array
    var card = cardArray[0]
    console.log("card " + card)
    hand.push(card);
  }
  return hand;
}

//might not be necessary right now
function contains(array, card){
  var contains=false;
  for(var i=0;i<array.length;i++)
    if(array[i].weight===card.weight)
      contains=true;
  return contains;
}
// function scoreHand(array) {
//   if (array[0].weight === array[1].weight) {
//     return true;
//   } else {
//     return false;
//   }
// }

///hand = object of deck
function scoreHand(hand) {
  console.log("You were dealt " + hand[0].name +" and "+ hand[1].name);
  if (hand[0].weight === hand[1].weight) {
   console.log("You fucking won!")
   return true;
  } else {
    //calls message function
   message();
  }
}

function message(){
  switch(Math.floor(Math.random()*5)){
    case 1: {console.log("You are terrible at this");}
            break;
    case 2: {console.log("Really?");}
            break;
    case 3: {console.log("You should just give up.");}
            break;
    case 4: {console.log("Wow, still nothing?");}
            break;
    case 5: {console.log("Just kill yourself");}
            break;
    default: {console.log("Your score is bad and you should feel bad!")}
  }
}


var hand = dealHand(deck,2);
console.log("Your hand is:");
for(var i =0;i<hand.length;i++){
  console.log(hand[i].name);
}
 scoreHand(hand);


window.onload = function(){
 document.getElementById("whatever").innerHTML = hand[0].code + hand[1].code ;
};
// if(pair){
//   console.log("You got a hand");
// } else {
//   console.log("You didn't get a pair");
// }
