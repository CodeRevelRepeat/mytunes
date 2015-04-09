// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  playFirst : function(){
    //console.log(this, this[0]);
    this.at(0).play();
  }

  //method that adds song to SongQueue
  //method that removes song from SongQueue once played

});
