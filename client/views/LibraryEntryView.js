// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({


  initialize: function(){
   this.model.on("all", this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playTimes %></td>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.countUp();
      this.model.enqueue();
      console.log(this.model, this.model.attributes.playTimes)
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
