class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    const aValue = value.toString();

    if (aValue.length === 1) {
      const zero = "0";
      const twoDigitNum = zero + aValue;

      return twoDigitNum;
    } else {
      return aValue;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    return this.currentTime;
  }

  split() {
    // ... your code goes here
    const splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const splitSeconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${splitMinutes}:${splitSeconds}`;
  }
}
