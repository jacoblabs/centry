package net.jacoblab.centry.repository;

import net.jacoblab.centry.entity.DocumentEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends ReactiveMongoRepository<DocumentEntity, String> {
}
