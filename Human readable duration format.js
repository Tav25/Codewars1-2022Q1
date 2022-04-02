function formatDuration(seconds) {
  let main = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    currentSeconds: seconds,

    isNow() {
      if (currentSeconds === 0) this.final = "now";
    },

    showLog() {
      console.log(
        `Y:${this.years} D:${this.days} H:${this.hours} M:${this.minutes} S:${this.currentSeconds}`
      );
    },

    get final() {
      return `${this.yearsOut} ${this.daysOut} ${this.hoursOut} ${this.minutesOut} ${this.secondsOut}`;
    },

    get secondsOut() {
      switch (this.currentSeconds) {
        case 0:
          return ``;
        case 1:
          return `1 second`;
        default:
          return `${this.currentSeconds} seconds`;
      }
    },

    get minutesOut() {
      switch (this.minutes) {
        case 0:
          return ``;
        case 1:
          return `1 minute`;
        default:
          return `${this.minutes} minutes`;
      }
    },

    get hoursOut() {
      switch (this.hours) {
        case 0:
          return ``;
        case 1:
          return `1 hour`;
        default:
          return `${this.hours} hours`;
      }
    },

    get daysOut() {
      switch (this.days) {
        case 0:
          return ``;
        case 1:
          return `1 day`;
        default:
          return `${this.days} days`;
      }
    },

    get yearsOut() {
      switch (this.years) {
        case 0:
          return ``;
        case 1:
          return `1 year`;
        default:
          return `${this.years} years`;
      }
    },

    init() {
      this.years = Math.floor(seconds / (365 * 24 * 60 * 60));
      this.currentSeconds = this.currentSeconds % 31536000;
      this.days = Math.floor(this.currentSeconds / (24 * 60 * 60));
      this.currentSeconds = this.currentSeconds % (24 * 60 * 60);
      this.hours = Math.floor(this.currentSeconds / (60 * 60));
      this.currentSeconds = this.currentSeconds % (60 * 60);
      this.minutes = Math.floor(this.currentSeconds / 60);
      this.currentSeconds = this.currentSeconds % 60;
      this.currentSeconds = this.currentSeconds;
    },
  };
  main.init();
  main.showLog();

  // console.log(`Y:${years} D:${days} H:${hours} M:${minutes} S:${seconds}`);

  // let punctuations = ["and ", ", ", ", ", ", "];
  // seconds = seconds ? `${seconds} seconds` : "";
  // minutes = minutes ? `${minutes} minutes` : "";
  // hours = hours ? `${hours} hours` : "";

  // let result = `${hours} ${minutes} ${seconds}`;
  return main.final;
}

console.log(formatDuration(1)); //, "1 second");
console.log(formatDuration(62)); //, "1 minute and 2 seconds");
console.log(formatDuration(120)); //, "2 minutes");
console.log(formatDuration(3600)); //, "1 hour");
console.log(formatDuration(3662)); //, "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(132030240)); //Expected: '4 years, 68 days, 3 hours and 4 minutes', instead got: undefined
