<template>
  <div>
    <h5 class="green--text pt-2 ">{{this.timeRemaining}}</h5>
  </div>
</template>

<script>
export default {
    props:["endAt"],
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer:null,
      date:"10/21/2021 1:1 PM",
      timeRemaining:null
    };
  },
  mounted(){
      this.timer = setInterval(this.startTimer, 1000);
  },
  methods: {
    startTimer() {
      var end = new Date(this.endAt);
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
            clearInterval(this.timer);
            this.timeRemaining= "EXPIRED";
            return;
            }
            this.days = Math.floor(distance / _day);
            this.hours = Math.floor((distance % _day) / _hour);
            this.minutes = Math.floor((distance % _hour) / _minute);
            this.seconds = Math.floor((distance % _minute) / _second);

            if(this.days>0){
                this.timeRemaining=this.days+"d left"
            }else{
                if(this.hours>0){
                this.timeRemaining=this.hours+"h left"
            }else{
                if(this.minutes>0){
                this.timeRemaining=this.minutes+"m left"
            }
            }
            }
    },
  },
};
</script>

<style>
</style>