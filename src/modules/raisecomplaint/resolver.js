const complaintController = require("./controller");

const resolver = {
  Query: {
    async getAllComplaint(_) {
      return await complaintController?.getComplaint();
    },
  },
  Mutation: {
    async createRaiseComplaint(_, { ComplaintInput }) {
      return await complaintController?.createRaiseComplaint(ComplaintInput);
    },
  },
};

module.exports = resolver;
