let count = 0;

function cc(card) {
  const lowCards = [2, 3, 4, 5, 6];
  const highCards = [10, "J", "Q", "K", "A"];
  if (lowCards.includes(card)) count++;
  if (highCards.includes(card)) count--;
  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

console.log(cc(2), cc(3), cc(7), cc("K"), cc("A"));
