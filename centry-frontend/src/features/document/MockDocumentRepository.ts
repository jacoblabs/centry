import { IDocumentRepository } from './types';
import mockData from './mockdata.json';

export class MockDocumentRepository implements IDocumentRepository {

    async getDocumentList({ page = 1 }) {
        let data: Document[] = []

        if (page == 1) {
            data = (mockData as unknown as Document[]).slice(0, 10);
        } else {
            data = (mockData as unknown as Document[]).slice(10, 20);
        }

        return data
    }
}
