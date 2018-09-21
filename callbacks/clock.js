class Clock {
  constructor() {
    let time = new Date().toString().slice(16, 24);
    // '13:50:05'
    this.hours = time.slice(0,2);
    this.minutes = time.slice(3,5);
    this.seconds = time.slice(6);

    setInterval(this._ticktok.bind(this), 2);
  }

  printTime() {
   let fullTime = `${this.hours}:${this.minutes}:${this.seconds}`;
   console.log(fullTime);
  }

  // ke$ha function
  _ticktok() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.checkSeconds();
    this.checkMinutes();
    this.checkHours();
    this.printTime();
  }

  checkSeconds() {
    if (this.seconds === 59) {
      this.seconds = 0;
      this.minutes++;
    } else {
      this.seconds++;
    }
  }

  checkMinutes() {
    if (this.minutes > 59 && this.seconds === 0 ) {
      this.minutes = 0;
      this.hours++;
    }
  }

  checkHours() {
    if (this.hours === 24) {
      this.hours = 0;
    }
  }

}

const clock = new Clock();
console.log(clock.printTime());
