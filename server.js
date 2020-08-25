 const { GraphQLServer} = require('graphql-yoga')

const messages = []
 
const typeDefs = `
type Message {
    id: ID!
    user:  String!
    content: String!
}
type Query {
    messages: [Message!]
}

type Mutation {
    postMessage(user: String!, content: String!):ID!
}
` 

const resolvers = {
    Query: {
        messages: () => messages
    },
    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            return id
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers})
server.start(({ port }) => {
    console.log(`servre on http://localhost:${port}`)
})




















// // const massages = []
// // const typeDefs = `
// // type Massage {
// //     id: ID!
// //     user: String!
// //     content : String!
// // }
// // type Quire {
// //     massages : [Message!]
// // }
// // `

// // const resolvers = {
// //     Quire: {
// //         massages: () => massages
// // }
// // }

// // const server = new GraphQLServer({typeDefs, resolvers})

// // server.start(({ port }) => {
// //     console.log(`server on http://localhost: ${port}`)
// // })





// //


// //const { GraphQLServer } = require('graphql-yoga')
// // ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
 
// // const typeDefs = `
// //   type Query {
// //     hello(name: String): String!
// //   }
// // `

//  const massages = []
// const typeDefs = `
// type Message {
//     id: ID!
//     user: String!
//     content : String!
// }
// type Quire {
//     massages : [Message!]
// }
// `

 
// const resolvers = {
// //   Query: {
// //     hello: (_, { name }) => `Hello ${name || 'World'}`,
// //   },
//      Quire: {
//         massages: () => massages
//  }
// }
 
// const server = new GraphQLServer({ typeDefs, resolvers })
// server.start(() => console.log('Server is running on localhost:4000'))