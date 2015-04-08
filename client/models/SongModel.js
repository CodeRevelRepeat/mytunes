// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    selected: false
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
