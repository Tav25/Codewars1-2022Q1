function formatDuration(seconds) {
  let years = Math.floor(seconds / 31536000);
  seconds = seconds % 31536000;
  let days = Math.floor(seconds / (24 * 60 * 60));
  seconds = seconds % (24 * 60 * 60);
  let hours = Math.floor(seconds / (60 * 60));
  seconds = seconds % (60 * 60);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  seconds = seconds;

  let result = `Y:${years} D:${days} H:${hours} M:${minutes} S:${seconds}`;
  return result;
}

console.log(formatDuration(1)); //, "1 second");
console.log(formatDuration(62)); //, "1 minute and 2 seconds");
console.log(formatDuration(120)); //, "2 minutes");
console.log(formatDuration(3600)); //, "1 hour");
console.log(formatDuration(3662)); //, "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(132030240)); //Expected: '4 years, 68 days, 3 hours and 4 minutes', instead got: undefined
