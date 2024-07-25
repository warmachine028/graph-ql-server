import db from '../db/data.js'
import { customAlphabet } from 'nanoid'
import { Game, Author, Review } from 'types'

export const resolvers = {
    Game: {
        reviews({ id }: { id: string }): Review[] {
            return db.reviews.filter((review) => review.game_id == id)
        }
    },
    Author: {
        reviews({ id }: { id: string }): Review[] {
            return db.reviews.filter((review) => review.author_id == id)
        }
    },
    Review: {
        author({ author_id }: { author_id: string }): Author {
            return db.authors.find((author) => author.id === author_id)
        },
        game({ game_id }: { game_id: string }): Game {
            return db.games.find((game) => game.id === game_id)
        }
    },
    Query: {
        games(): Game[] {
            return db.games
        },
        game(_: {}, { id }: { id: string }): Game {
            return db.games.find((game) => game.id === id)
        },
        reviews(): Review[] {
            return db.reviews
        },
        review(_: {}, { id }: { id: string }): Review {
            return db.reviews.find((review) => review.id === id)
        },
        authors(): Author[] {
            return db.authors
        },
        author(_: {}, { id }: { id: string }): Author {
            return db.authors.find((author) => author.id === id)
        }
    },
    Mutation: {
        deleteGame(_: {}, { id }: { id: string }): Game[] {
            db.games = db.games.filter((game) => game.id !== id)
            return db.games
        },
        addGame(_: {}, { game: newGame }: { game: Game }): Game {
            const game = {
                ...newGame,
                id: customAlphabet('1234567890', 5)()
            }
            db.games.push(game)
            return game
        }
    }
}
