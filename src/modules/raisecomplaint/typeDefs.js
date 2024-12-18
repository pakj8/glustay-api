const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    hotelName: String
  }

  type Complaint {
    fullName: String
    email: String
    subject: String
    complaint: String
    reservationId: String
    hotelId: hotel
    createdAt: Date
  }

  input ComplaintInput {
    fullName: String
    email: String
    subject: String
    complaint: String
    reservationId: String
    hotelId: ID
  }

  type Query {
    getAllComplaint: [Complaint]
  }

  type Mutation {
    createRaiseComplaint(ComplaintInput: ComplaintInput): Complaint
  }
`;

module.exports = typeDefs;
