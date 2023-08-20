import { IDocumentRepository } from './types'
import { MockDocumentRepository } from './MockDocumentRepository'

const documentRepository: IDocumentRepository = new MockDocumentRepository()

// Not tested
test('mock repository should return documents', () => {
    documentRepository.getDocumentList({}).then(documents => {
        expect(documents).not.toBeNull();
    });
})
