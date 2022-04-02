function formatDuration(inSeconds) {
  let main = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: inSeconds,
    punctuation: {
      minutes: ", ",
      hours: ", ",
      days: ", ",
      years: ", ",
      labelAnd: " and ",
      labelZero: "",
      func() {
        if (main.minutes && main.seconds) {
          this.minutes = this.labelAnd;
        } else if (main.hours && (main.minutes || main.seconds)) {
          this.minutes = this.labelZero;
          this.hours = this.labelAnd;
        } else if (main.days && (main.hours || main.minutes || main.seconds)) {
          this.days = this.labelAnd;
        } else if (
          main.years &&
          (main.days || main.hours || main.minutes || main.seconds)
        ) {
          this.years = this.labelAnd;
        }
        // console.log(">>>");
      },
    },

    isNow() {
      if (seconds === 0) this.final = "now";
    },

    showLog() {
      console.log(
        `Y:${this.years} D:${this.days} H:${this.hours} M:${this.minutes} S:${this.seconds}`
      );
    },

    get final() {
      return `${this.yearsOut}${this.daysOut}${this.hoursOut}${this.minutesOut}${this.secondsOut}`;
    },

    get secondsOut() {
      switch (this.seconds) {
        case 0:
          return ``;
        case 1:
          return `1 second`;
        default:
          return `${this.seconds} seconds`;
      }
    },

    get minutesOut() {
      switch (this.minutes) {
        case 0:
          return ``;
        case 1:
          return `1 minute${this.punctuation.minutes}`;
        default:
          return `${this.minutes} minutes${this.punctuation.minutes}`;
      }
    },

    get hoursOut() {
      switch (this.hours) {
        case 0:
          return ``;
        case 1:
          return `1 hour${this.punctuation.hours}`;
        default:
          return `${this.hours} hours${this.punctuation.hours}`;
      }
    },

    get daysOut() {
      switch (this.days) {
        case 0:
          return ``;
        case 1:
          return `1 day${this.punctuation.days}`;
        default:
          return `${this.days} days${this.punctuation.days}`;
      }
    },

    get yearsOut() {
      switch (this.years) {
        case 0:
          return ``;
        case 1:
          return `1 year${this.punctuation.years}`;
        default:
          return `${this.years} years${this.punctuation.years}`;
      }
    },

    init() {
      this.years = Math.floor(inSeconds / (365 * 24 * 60 * 60));
      this.seconds = this.seconds % 31536000;
      this.days = Math.floor(this.seconds / (24 * 60 * 60));
      this.seconds = this.seconds % (24 * 60 * 60);
      this.hours = Math.floor(this.seconds / (60 * 60));
      this.seconds = this.seconds % (60 * 60);
      this.minutes = Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
      this.seconds = this.seconds;
    },
  };
  main.init();
  main.punctuation.func();
  // main.showLog();

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
