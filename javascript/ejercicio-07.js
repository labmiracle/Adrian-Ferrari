let count = 0;

function cc(card) {
  const lowCards = [2, 3, 4, 5, 6];
  const highCards = [10, "J", "Q", "K", "A"];
  if (lowCards.includes(card)) count++;
  if (highCards.includes(card)) count--;
  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

console.assert(cc(2) === "1 Bet");
console.assert(cc(3) === "2 Bet");
console.assert(cc(7) === "2 Bet");
console.assert(cc("K") === "1 Bet");
console.assert(cc("A") === "0 Hold");
