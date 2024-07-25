import db from '../db/data.js'

export const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_: {}, { id }: { id: string }) {
            return db.games.find((game) => game.id === id)
        },
        reviews() {
            return db.reviews
        },
        review(_: {}, { id }: { id: string }) {
            return db.reviews.find((review) => review.id === id)
        },
        authors() {
            return db.authors
        },
        author(_: {}, { id }: { id: string }) {
            return db.authors.find((author) => author.id === id)
        }
    },
    Game: {
        reviews({ id }: { id: string }) {
            return db.reviews.filter((review) => review.game_id == id)
        }
    },
    Author: {
        reviews({ id }: { id: string }) {
            return db.reviews.filter((review) => review.author_id == id)
        }
    },
    Review: {
        author({ author_id }: { author_id: string }) {
            return db.authors.find((author) => author.id === author_id)
        },
        game({ game_id }: { game_id: string }) {
            return db.games.find((game) => game.id === game_id)
        }
    }
}