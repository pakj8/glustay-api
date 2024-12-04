const hotel = require("./hotels");
const request = require("./request");
const booking = require("./booking");
const uploader = require("./uploader");
const webcheckin = require("./webcheckin");
const requestBooking = require("./requestbooking");
const raiseComplaint = require("./raisecomplaint");
const webcheckout = require("./webcheckout");

const typeDefs = [
  hotel.typeDefs,
  request?.typeDefs,
  booking?.typeDefs,
  uploader?.typeDefs,
  webcheckin?.typeDefs,
  requestBooking?.typeDefs,
  raiseComplaint?.typeDefs,
  webcheckout?.typeDefs,
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
];

module.exports = { typeDefs, resolvers };
