const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    hotelName: String
    address: String
    gmapurl: String
    importantInfo: String
    wifiPassword: String
  }

  input hotelInput {
    _id: ID
    hotelName: String
    address: String
    gmapurl: String
    importantInfo: String
    wifiPassword: String
  }

  type Query {
    getHotelById(hotelId: ID): hotel
    getAllHotel: [hotel]
  }

  type Mutation {
    createHotel(hotelInput: hotelInput): hotel
  }
`;

module.exports = typeDefs;
