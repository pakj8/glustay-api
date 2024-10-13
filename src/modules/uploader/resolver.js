const { GraphQLUpload } = require("graphql-upload");
const uploaderController = require("./controller");

const resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    async uploadImage(_, { file }) {
      return await uploaderController.file(file);
    },
  },
};

module.exports = resolvers;
