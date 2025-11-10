export interface BoardPost {
    id: number
    title: string
    date: string
    content: string
    author: string
}

export function getPaginatedPosts(posts: BoardPost[], page: number, postsPerPage: number = 10) {
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    return posts.slice(startIndex, endIndex)
}

export function getTotalPages(totalPosts: number, postsPerPage: number = 10) {
    return Math.ceil(totalPosts / postsPerPage)
}