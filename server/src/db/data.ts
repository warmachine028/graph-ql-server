import { Author, Game, Review } from 'types'

const games: Game[] = [
    { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
    { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
    { id: '4', title: 'Mario Kart', platform: ['Switch'] },
    { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] }
]

const authors: Author[] = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    { id: '3', name: 'peach', verified: true }
]

const reviews: Review[] = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error.', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'Lorem ipsum dolor sit', author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: 'consectetur adipisicing elit', author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: 'adipisicing elit', author_id: '2', game_id: '5' },
    { id: '6', rating: 7, content: 'Consequatur, error  adipisicing elit', author_id: '1', game_id: '2' },
    { id: '7', rating: 10, content: 'lorem', author_id: '3', game_id: '1' }
]

export default { games, authors, reviews }
