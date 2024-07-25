type Game = {
    id: string
    title: string
    platform: string[]
}

type Review = {
    id: string
    rating: number
    content: string
    game_id: string
    author_id: string
}

type Author = {
    id: string
    name: string
    verified: boolean
}

export { Game, Author, Review }
