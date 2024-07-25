export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author 
    }
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: NewGame!): Game
        editGame(id: ID!, game: EditGame!): Game
    }
    input NewGame {
        title: String!
        platform: [String!]!
    }
    input EditGame {
        title: String
        platform: [String!]
    }
`

// int, float, string, boolean, ID
