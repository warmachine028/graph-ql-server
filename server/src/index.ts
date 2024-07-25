import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from 'models/schema.js'
import { resolvers } from 'controllers/resolver.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT: number = parseInt(process.env.PORT)
const server: ApolloServer = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, { listen: { port: PORT } })
    .then(({ url }) => console.log(`🚀 Server ready at: ${url}`))
    .catch((error) => console.error(error))
