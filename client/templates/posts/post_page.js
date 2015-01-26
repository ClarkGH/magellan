Template.postPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },
  username: function() {
    return Meteor.user().username;
  }
});
