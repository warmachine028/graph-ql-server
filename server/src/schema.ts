import db from './db/data.js'

export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        games: [Game]
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
    }
`

export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        review(_: {}, { id }: { id: string }) {
            return db.reviews.find((review) => review.id === id)
        }
    }
}

// int, float, string, boolean, ID
