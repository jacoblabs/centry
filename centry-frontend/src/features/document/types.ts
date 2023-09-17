import { Document } from '../../../types/document';

export interface IDocumentService {
    getDocumentList: ({ page } : { page?: number }) => Promise<Document[]>
    getDocument: ({ id } : { id: number }) => Promise<Document | null>
}

export interface IDocumentRepository {
    getDocumentList: ({ page } : { page?: number }) => Promise<Document[]>
    getDocumentById: (id: number) => Promise<Document | null>
}
