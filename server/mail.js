Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:agraptor@gmail.com@smtp.mailgun.org:587';
});

// Email to send to
contactFormConfig.settings.emailTo = 'agomez.amdg@gmail.com';
// Name (optional)
contactFormConfig.settings.fullName = 'Alejandro Gomez';
