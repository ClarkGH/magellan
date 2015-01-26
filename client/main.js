// // AccountsTemplates.configureRoute('signIn', {
// //   redirect: function() {
// //     var user = Meteor.user();
// //     if (user)
// //       Router.go('/');
// //     }
// //   });
// //
// //
//
AccountsTemplates.addField({
  _id: 'username',
  type: 'text',
  required: true,
  func: function(value){
    if (Meteor.isClient) {
      console.log("Validating username...");
      var self = this;
      Meteor.call("userExists", value, function(err, userExists){
        if (!userExists)
          self.setSuccess();
          else
            self.setError(userExists);
            self.setValidating(false);
          });
          return;
        }
        // Server
        return Meteor.call("userExists", value);
      },
    });

  Meteor.startup(function() {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update({
      "service": "facebook"
    }, {
      $set: {
        "appId": "1572458596324867",
        "secret": "f1a0f95ed14ebf5055fcce4f42daed66"
      }
    }, {
      upsert: true
    });

    // Add Twitter configuration entry
    ServiceConfiguration.configurations.update({
      "service": "twitter"
    }, {
      $set: {
        "consumer key": "PNuQSrTYCY1YGRyXJb0PMis8x",
        "consumer secret": "E41gdIASgtgpVH0bxNSFaTZTAgmJnMuYn1JLlSPI4EAEaMSJfi"
      }
    }, {
      upsert: true
    });
  });
