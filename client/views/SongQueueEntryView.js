// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  //
  //
  //get from song model that song clicked and add to playlist dom node
  //song.get
  //render on Dom song name
  //
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  render: function(){


    return this.$el.html(this.template(this.model.attributes));
  },


    events: {
    'click': function() {
      console.log("removing clicked song", this.$el)
      this.$el.remove();
      this.model.disenqueue();
    }
  },

});
