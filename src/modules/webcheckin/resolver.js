const webcheckInController = require("./controller");

const resolver = {
  Mutation: {
    async createWebCheckInData(_, WebCheckInInput) {
      return await webcheckInController?.createWebCheckInData(WebCheckInInput);
    },
  },
};

module.exports = resolver;
