// // Fixture data
// if (Posts.find().count() === 0) {
//   var now = new Date().getTime();
//
//   // create two users
//   var tomId = Meteor.users.insert({
//     profile: { name: 'Tom Coleman' }
//   });
//   var tom = Meteor.users.findOne(tomId);
//   var sachaId = Meteor.users.insert({
//     profile: { name: 'Sacha Greif' }
//   });
//   var sacha = Meteor.users.findOne(sachaId);
//
//   var telescopeId = Posts.insert({
//     postTitle: 'Introducing Telescope',
//     userId: sacha._id,
//     author: sacha.profile.name,
//     postCaption: 'cool caption',
//     postContent: 'content',
//     submitted: new Date(now - 7 * 3600 * 1000),
//     commentsCount: 2,
//     upvoters: [], votes: 0
//   });
// }
