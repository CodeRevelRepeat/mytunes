// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
    this.listenTo(this.model,'disenqueue', this.pause);
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  pause: function(){
    console.log("trying to pause", this.model);
    this.el.pause();
  },

  events: {
    'ended': function() {
      console.log(this.model + " hi")
      this.model.disenqueue();
    }
  },

});
