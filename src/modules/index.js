const hotel = require("./hotels");
const request = require("./request");
const booking = require("./booking");
const uploader = require("./uploader");

const typeDefs = [
  hotel.typeDefs,
  request?.typeDefs,
  booking?.typeDefs,
  uploader?.typeDefs,
];

const resolvers = [
  hotel.resolvers,
  request?.resolvers,
  booking?.resolvers,
  uploader?.resolvers,
];

module.exports = { typeDefs, resolvers };
