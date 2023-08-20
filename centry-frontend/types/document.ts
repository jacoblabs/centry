export interface Document {
    id?: number
    title?: string
    content?: string
    origin?: string
    topic?: string
    createdAt?: number // unix timestamp(msec)
}
