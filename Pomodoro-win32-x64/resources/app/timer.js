new Vue({
  el: "#app",
  data: {
    time: 1500,
    initial: 1500,
    started: false,
    breaktime: false
  },
  filters: {
    minutesAndSeconds() {
      var minutes = Math.floor(this.time / 60);
      var seconds = this.time - 60 * minutes;

      if (minutes < 10) {
        minutes = "0" + Math.floor(this.time / 60);
      } else if (minutes === 0) {
        minutes = "00";
      }

      if (seconds < 10) {
        seconds = "0" + (this.time - 60 * minutes);
      } else if (seconds === 0) {
        seconds = "00"
      }

      return minutes + ":" + seconds;
    }
  },
  methods: {
    start() {
      var beeps = new Audio('endbeeps.wav');
      
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time === 0 && this.breaktime === false) {
          this.started = false;
          this.breaktime = true;
          this.time = 300;
          this.initial = 300;
          beeps.play();
          clearInterval(this.interval);
        } else if (this.time === 0 && this.breaktime === true) {
          this.started = false;
          this.breaktime = false;
          this.time = 1500;
          this.initial = 1500;
          beeps.play();
          clearInterval(this.interval);
        }
      }, 1000);
      this.started = true;
    },
    pause() {
      clearInterval(this.interval);
      this.started = false;
    }
  }

})