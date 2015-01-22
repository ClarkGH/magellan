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
//   Meteor.startup(function() {
//     // Add Facebook configuration entry
//     ServiceConfiguration.configurations.update({
//       "service": "facebook"
//     }, {
//       $set: {
//         "appId": "309054459282158",
//         "secret": "c0924d026d81852052ba5d9c5a4817a6"
//       }
//     }, {
//       upsert: true
//     });
//
//     // Add Twitter configuration entry
//     ServiceConfiguration.configurations.update({
//       "service": "twitter"
//     }, {
//       $set: {
//         "appId": "My6pFjQkk0l6UGtJb5jjFjKVc",
//         "secret": "zLqoIM49sVstkTeWgrftsNcJKMWi0NhYCYCs7b0h76NfqL8tCW"
//       }
//     }, {
//       upsert: true
//     });
//
//     loadFilePicker('AlzZ1GHwAQNCfgfRR2xBCz');
//   });
//
