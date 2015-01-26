// Meteor.startup(function () {
//   process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:agraptor@gmail.com@smtp.mailgun.org:587';
// });

// Email to send to
contactFormConfig.settings.emailTo = 'agomez.amdg@gmail.com';
// Name (optional)
contactFormConfig.settings.fullName = 'Alejandro Gomez';



Meteor.methods({
  "userExists": function(username){
    return !!Meteor.users.findOne({username: username});
  },
});



Meteor.startup(function() {
  // bootstrap the admin user if they exist -- You'll be replacing the id later
  if (Meteor.users.findOne("KaAiPK6xfTgJhWY4W"))
    Roles.addUsersToRoles("KaAiPK6xfTgJhWY4W", ['admin']);

    if (Meteor.users.findOne("qdRe5wWCbSENzCF2n"))
      Roles.addUsersToRoles("qdRe5wWCbSENzCF2n", ['admin']);

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
