Template.postSubmit.created = function() {
  Session.set('postSubmitErrors', {});
}

Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      postTitle: $(e.target).find('[name=postTitle]').val(),
      postCaption: $(e.target).find('[name=postCaption]').val(),
      postContent: $(e.target).find('[name=postContent]').val()
    };

    var errors = validatePost(post);
    if (errors.postTitle || errors.postCaption || errors.postContent)
      return Session.set('postSubmitErrors', errors);

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      

      Router.go('postPage', {_id: result._id});
    });
  }
});
