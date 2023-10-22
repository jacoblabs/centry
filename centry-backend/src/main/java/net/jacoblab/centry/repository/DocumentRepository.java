package net.jacoblab.centry.repository;

import net.jacoblab.centry.entity.Document;
import net.jacoblab.centry.entity.DocumentEntity;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Repository
public interface DocumentRepository extends ReactiveMongoRepository<DocumentEntity, Integer> {

    @Query("{'id' : ?0}")
    public Mono<DocumentEntity> findById(Long id);
    public Mono<DocumentEntity> findByTitle(String title);
}
