export interface IDocumentService {
    getDocumentList: ({ page } : { page?: number }) => Promise<Document[]>
}

export interface IDocumentRepository {
    getDocumentList: ({ page } : { page?: number }) => Promise<Document[]>
}
