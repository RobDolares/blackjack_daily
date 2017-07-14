/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/




function handValue(hand) {
  let total = 0;

  for (var i = 0; i < hand.length; i++) {
    if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")) {
      total += 10;
    } else if (parseInt(hand[i]) <= 10 && parseInt(hand[i]) >= 2) {
      total += parseInt(hand[i]);
    }
  }
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A" && total <= 10) {
      total += 11;
    } else if (hand[i] === "A" && total > 10) {
      total += 1;
    }
  }
  return total;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

// ************Different Direction**************

// function handValue(hand) {
//   let total = 0;
//   var aces = [];
//
//   let cardValue = function() {
//     if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")) {
//       return [10];
//     } else if (hand[i] === "A") {
//       return [1, 11];
//     } else {
//       return parseInt(hand[i]);
//     }
//   }
//
//   for (var i = 0; i < hand.length; i++) {
//     let value = cardValue(hand[i]);
//     if (value.length === 1) { //Length of array from cardValue fxn
//       total += value[0];
//     } else {
//       aces.push(value);
//     }
//   }
//
//   for (var j = 0; j < aces.length; j++) {
//     if (total + aces[j].value[1] <= 21) {
//       total + aces[j].value[1];
//     } else {
//       total + aces[j].value[0];
//     }
//   }
//   return total;
// }
