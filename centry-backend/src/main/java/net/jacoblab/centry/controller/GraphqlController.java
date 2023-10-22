package net.jacoblab.centry.controller;

import lombok.RequiredArgsConstructor;
import net.jacoblab.centry.entity.Document;
import net.jacoblab.centry.entity.DocumentEntity;
import net.jacoblab.centry.repository.DocumentRepository;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;

@Controller
public class GraphqlController {

    private final DocumentRepository documentRepository;
    public GraphqlController(DocumentRepository documentRepository){
        this.documentRepository = documentRepository;
    }

    @QueryMapping
    Mono<String> hello() {
        return Mono.just("hello centry");
    }

    @QueryMapping
    Flux<Document> findAll() {
        return documentRepository.findAll().map(DocumentEntity::toModel);
    }

    @QueryMapping
    Mono<Document> findById(@Argument Long id) {
        return documentRepository.findById(id).map(DocumentEntity::toModel);
    }

    @QueryMapping
    Mono<Document> findByTitle(@Argument String title) {
        return documentRepository.findByTitle(title).map(DocumentEntity::toModel);
    }
}
