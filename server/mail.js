// Meteor.methods({
//   sendEmail: function (to, from, subject, text) {
//     check([a, from, subject, text], [String]);
//
//     // Let other method calls from the same client start running,
//     // without waiting for the email sending to complete.
//     this.unblock();
//
//     Email.send({
//       to: to,
//       from: agomez.amdg@gmail.com,
//       subject: subject,
//       text: text
//     });
//   }
// });
