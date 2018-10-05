// Create Countdown
var Countdown = {

  // Backbone-like structure
  $el: document.querySelector('#mte-countdown'),

  // Params
  countdown_interval: null,
  total_seconds     : 0,
  delta             : 0,

  // Initialize the countdown
  init: function() {

    // End Date
    this.end_date = new Date( this.$el.getAttribute('data-end-date') ).getTime();
    this.today = new Date().getTime();

    // Total seconds between the times
    this.delta = Math.floor(this.end_date - this.today) / 1000;

    if(this.delta > 0) {
      document.querySelector('.countdown').classList.add('active');
    } else {
      document.querySelector('.countdown').classList.remove('active');
      document.querySelector('.countdown').classList.add('expired');
      document.querySelector('.countdown__expired').classList.remove('active');
    }

    // Days
    this.days = Math.floor(this.delta / 86400);
    this.delta -= this.days * 86400;

    // Hours
    this.hours = Math.floor(this.delta / 3600) % 24;
    this.delta -= this.hours * 3600;

    // Minutes
    this.minutes = Math.floor(this.delta / 60) % 60;
    this.delta -= this.minutes * 60;

    // Seconds
    this.seconds = Math.floor(this.delta % 60);  // in theory the modulus is not required

    // DOM
    this.$ = {
      days   : this.$el.querySelectorAll('.countdown__block.days .figure'),
      hours  : this.$el.querySelectorAll('.countdown__block.hours .figure'),
      minutes: this.$el.querySelectorAll('.countdown__block.minutes .figure'),
      seconds: this.$el.querySelectorAll('.countdown__block.seconds .figure')
    };

    // Init countdown values
    this.values = {
      days:    this.days,
      hours:   this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    };

    // Initialize total seconds
    this.total_seconds = this.values.days * 24 * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

    // Animate countdown to the end
    this.count();
  },

  count: function() {

    var that    = this,
    $day_1      = this.$.days[0],
    $day_2      = this.$.days[1],
    $hour_1     = this.$.hours[0],
    $hour_2     = this.$.hours[1],
    $min_1      = this.$.minutes[0],
    $min_2      = this.$.minutes[1],
    $sec_1      = this.$.seconds[0],
    $sec_2      = this.$.seconds[1];

    this.countdown_interval = setInterval(function() {

      if(that.total_seconds > 0) {

        --that.values.seconds;

        if(that.values.minutes >= 0 && that.values.seconds < 0) {

          that.values.seconds = 59;
          --that.values.minutes;
        }

        if(that.values.hours >= 0 && that.values.minutes < 0) {

          that.values.minutes = 59;
          --that.values.hours;
        }

        if(that.values.days >= 0 && that.values.hours < 0) {

          that.values.hours = 59;
          --that.values.days;
        }

        // Update DOM values

        // Days
        that.checkValue(that.values.days, $day_1, $day_2);

        // Hours
        that.checkValue(that.values.hours, $hour_1, $hour_2);

        // Minutes
        that.checkValue(that.values.minutes, $min_1, $min_2);

        // Seconds
        that.checkValue(that.values.seconds, $sec_1, $sec_2);

        --that.total_seconds;
      }
      else {
        clearInterval(that.countdown_interval);
        document.querySelector('.countdown').classList.remove('active');
        document.querySelector('.countdown').classList.add('expired');
        document.querySelector('.countdown__expired').classList.add('active');
      }
    }, 1000);
  },

  animateFigure: function($el, value) {

    //var that         = this,
    var $top         = $el.querySelector('.top'),
    $bottom          = $el.querySelector('.bottom'),
    $back_top        = $el.querySelector('.top-back'),
    $back_bottom     = $el.querySelector('.bottom-back');

    // Before we begin, change the back value
    $back_top.querySelector('span').innerHTML = value;

    // Also change the back bottom value
    $back_bottom.querySelector('span').innerHTML = value;

    // Animate
    if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
      /* Microsoft Internet Explorer detected in. */
      $top.innerHTML = value;
      $bottom.innerHTML = value;
    } else {
      $top.classList.add('flipTop');
      setTimeout(function() {
        $top.classList.remove('flipTop');
        $top.innerHTML = value;
      }, 750);

      $back_top.classList.add('flipTopBack');
      setTimeout(function() {
        $back_top.classList.remove('flipTopBack');
        $bottom.innerHTML = value;
      }, 750);
    }



  },

  checkValue: function(value, $el_1, $el_2) {

    var val_1   = value.toString().charAt(0),
    val_2       = value.toString().charAt(1),
    fig_1_value = $el_1.querySelector('.top').innerHTML,
    fig_2_value = $el_2.querySelector('.top').innerHTML;


    if(value >= 10) {
      // Animate only if the figure has changed
      if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
      if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    } else {
      // If we are under 10, replace first figure with 0
      if(fig_1_value !== '0') this.animateFigure($el_1, 0);
      if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }
  }
};

// Initialize countdown
Countdown.init();
