const hotel = require("./hotels");
const request = require("./request");
const booking = require("./booking");
const uploader = require("./uploader");
const webcheckin = require("./webcheckin");
const requestBooking = require("./requestbooking");
const raiseComplaint = require("./raisecomplaint");
const webcheckout = require("./webcheckout");
const eventsAndActivities = require("./eventsandactivities");
const gluStayAI = require("./glustayai");
const eventBooking = require("./eventsbooking");

const typeDefs = [
  hotel.typeDefs,
  request?.typeDefs,
  booking?.typeDefs,
  uploader?.typeDefs,
  webcheckin?.typeDefs,
  requestBooking?.typeDefs,
  raiseComplaint?.typeDefs,
  webcheckout?.typeDefs,
  eventsAndActivities.typeDefs,
  gluStayAI.typeDefs,
  eventBooking.typeDefs,
];

const resolvers = [
  hotel.resolvers,
  request?.resolvers,
  booking?.resolvers,
  uploader?.resolvers,
  webcheckin?.resolvers,
  requestBooking?.resolvers,
  raiseComplaint?.resolvers,
  webcheckout?.resolvers,
  eventsAndActivities.resolvers,
  gluStayAI?.resolvers,
  eventBooking.resolvers,
];

module.exports = { typeDefs, resolvers };
