const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    hotelName: String
  }

  type Request {
    _id: ID
    hotelId: [hotel]
    requestTitle: String
    category: String
    image: String
    description: String
  }

  input requestInput {
    hotelId: [ID]
    requestTitle: String
    category: String
    image: String
    description: String
  }

  input updateRequestHotelIdInput {
    requestId: ID
    hotelId: ID
    action: Boolean
  }

  type Query {
    getRequestByHotelId(hotelId: ID): [Request]
    getAllRequest: [Request]
  }

  type Mutation {
    createRequest(requestInput: requestInput): Request
    updateRequestHotelId(
      updateRequestHotelIdInput: updateRequestHotelIdInput
    ): Request
  }
`;

module.exports = typeDefs;
