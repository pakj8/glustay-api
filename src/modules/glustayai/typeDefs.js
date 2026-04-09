const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type AIResponse {
    reply: String
  }

  input ChatMessageInput {
    role: String!
    content: String!
  }

  type Mutation {
    gluChat(
      messages: [ChatMessageInput!]!
      guestName: String
      hotelName: String
      reservationId: String
      hotelAddress: String
      wifiPassword: String
    ): AIResponse
  }
`;

module.exports = typeDefs;
