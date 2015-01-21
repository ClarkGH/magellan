AccountsTemplates.configureRoute('signIn', {
  redirect: function() {
    var user = Meteor.user();
    if (user)
      Router.go('/');
  }
});


Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update({
    "service": "facebook"
  }, {
    $set: {
      "appId": "",
      "secret": ""
    }
  }, {
    upsert: true
  });

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update({
    "service": "twitter"
  }, {
    $set: {
      "appId": "",
      "secret": ""
    }
  }, {
    upsert: true
  });
});
