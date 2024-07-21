import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = parseInt(process.env.PORT)
const resolvers = {}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT }
})

console.log(`🚀 Server ready at: ${url}`)
