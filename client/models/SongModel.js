// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    selected: false
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  disenqueue: function(){
    this.trigger('disenqueue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});
