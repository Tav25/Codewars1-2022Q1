function getParticipants(handshakes) {
  handshakes = handshakes - 1;
  return (handshakes * (handshakes - 1)) / 2 + 1;
}

// console.log(getParticipants(4)); //, 1)
// console.log(getParticipants(1)); //, 2)
// console.log(getParticipants(3)); //, 3)
// console.log(getParticipants(6)); //, 4)
// console.log(getParticipants(7)); //, 5)

function getParticipants(handshakes) {
  let result = 0;
  handshakes--;
  do {
    result++;
    handshakes -= result;
  } while (handshakes >= 0);
  return result;
}

console.log(getParticipants(0))//, 1)
console.log(getParticipants(1))//, 2)
console.log(getParticipants(3))//, 3)
console.log(getParticipants(6))//, 4)
console.log(getParticipants(7))//, 5)