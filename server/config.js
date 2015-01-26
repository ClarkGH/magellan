// Meteor.startup(function () {
//   process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:agraptor@gmail.com@smtp.mailgun.org:587';
// });

// Email to send to
contactFormConfig.settings.emailTo = 'agomez.amdg@gmail.com';
// Name (optional)
contactFormConfig.settings.fullName = 'Alejandro Gomez';


Meteor.startup(function() {
  // bootstrap the admin user if they exist -- You'll be replacing the id later
  if (Meteor.users.findOne("xLivDtEhiCr8oNXJt"))
    Roles.addUsersToRoles("xLivDtEhiCr8oNXJt", ['admin']);

    // if (Meteor.users.findOne(""))
    //   Roles.addUsersToRoles("", ['admin']);

  // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
  // if (!Meteor.roles.findOne({
  //     name: "secret"
  //   }))
  //   Roles.createRole("secret");
  //
  // if (!Meteor.roles.findOne({
  //     name: "double-secret"
  //   }))
  //   Roles.createRole("double-secret");
});
