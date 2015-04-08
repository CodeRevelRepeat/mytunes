// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.set({'selected': true});
      console.log(this.model.get('selected'));
      //Tell song model that selected
        // this.model.set({})
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
