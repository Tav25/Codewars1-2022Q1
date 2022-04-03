function formatDuration(inSeconds) {
  let main = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: inSeconds,
    array: [],

    isNow() {
      if (seconds === 0) this.final = "now";
    },

    showLog() {
      console.log(
        `Y:${this.years} D:${this.days} H:${this.hours} M:${this.minutes} S:${this.seconds}`
      );
    },

    get final() {
      this.array = [
        this.yearsOut,
        this.daysOut,
        this.hoursOut,
        this.minutesOut,
        this.secondsOut,
      ];
      let result = "";

      return this.array
        .filter((el, indx) => {
          if (el) return el;
        })
        .reverse()
        .map((el, indx) => {
          if (indx === 1) el = el + " and";
          if (indx > 1) el = el + ",";

          return el;
        })
        .reverse()
        .join(" ");
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
  return main.final;
}

console.log(formatDuration(1)); //, "1 second");
console.log(formatDuration(62)); //, "1 minute and 2 seconds");
console.log(formatDuration(120)); //, "2 minutes");
console.log(formatDuration(3600)); //, "1 hour");
console.log(formatDuration(3662)); //, "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(132030240)); //Expected: '4 years, 68 days, 3 hours and 4 minutes', instead got: undefined
