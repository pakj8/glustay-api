const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type hotel {
    _id: ID
    hotelName: String
  }

  type Events {
    _id: ID
    name: String
    category: String
    imageUrl: String
    date: Date
    time: String
    location: String
    pricePerPerson: String
    tags: [String]
    description: String
    hotelId: hotel
  }

  input eventsInput {
    hotelId: ID
    name: String
    imageUrl: String
    category: String
    date: Date
    time: String
    location: String
    pricePerPerson: String
    tags: [String]
    description: String
  }

  type Query {
    getAllEvents: [Events]
    getEventsById(eventsId: ID): Events
    getEventsByHotelId(hotelId: ID): [Events]
  }

  type Mutation {
    createEvents(eventsInput: eventsInput): Events
  }
`;

module.exports = typeDefs;
