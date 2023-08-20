import { IDocumentRepository } from './types';
import mockData from './mockdata.json';

export class MockDocumentRepository implements IDocumentRepository {

    async getDocumentList({ page = 1 }) {
        let data: Document[] = []

        if (page == 1) {
            data = (mockData as unknown as Document[]).slice(0, 5);
        } else {
            data = (mockData as unknown as Document[]).slice(5, 10);
        }

        return data
    }
}
