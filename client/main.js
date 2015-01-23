//
// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY'
// });
// AccountsTemplates.configureRoute('signIn', {
//   redirect: function() {
//     var user = Meteor.user();
//     if (user)
//       Router.go('/');
//     }
//   });
//
//
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
