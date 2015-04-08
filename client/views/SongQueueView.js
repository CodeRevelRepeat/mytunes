// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",
  initialize: function() {
    this.collection.on('change', this.render ,this);
    this.render();
  },



  render: function() {
    console.log(this.collection)
    this.$el.html('<th>PlayList</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
