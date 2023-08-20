import { IDocumentService, IDocumentRepository } from './types'

interface ConstructorProps {
    documentRepository: IDocumentRepository
}

export class DocumentService implements IDocumentService {
    private documentRepository: IDocumentRepository;

    constructor({ documentRepository }: ConstructorProps) {
        this.documentRepository = documentRepository;
    }

    async getDocumentList({ page = 0 }) {
        return this.documentRepository.getDocumentList({ page })
    }
}
