const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers/index");

// async function main() {
//   // const newUser = await prisma.createUser({
//   //   name: "Eva",
//   //   email: "eva@prisma.io",
//   //   posts: {
//   //     create: [
//   //       {
//   //         title: "First post"
//   //       },
//   //       {
//   //         title: "Second post"
//   //       }
//   //     ]
//   //   }
//   // });
//   // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);
//   // const allUsers = await prisma.users();
//   // console.log(allUsers);
//   // const allPosts = await prisma.posts();
//   // console.log(allPosts);

//   // Query Relational Data
//   const postsByUser = await prisma
//     .user({
//       email: "eva@prisma.io"
//     })
//     .posts();

//   console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`);
// }

// main().catch(e => console.error(e));

const server = new GraphQLServer({
  typeDefs: "./schemas/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log("Server started!"));
