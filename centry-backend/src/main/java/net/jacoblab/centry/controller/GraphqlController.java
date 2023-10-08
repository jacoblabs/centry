package net.jacoblab.centry.controller;

import lombok.RequiredArgsConstructor;
import net.jacoblab.centry.entity.Document;
import net.jacoblab.centry.entity.DocumentEntity;
import net.jacoblab.centry.repository.DocumentRepository;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Controller
public class GraphqlController {

    private final DocumentRepository documentRepository;

    @QueryMapping
    Mono<String> hello() {
        return Mono.just("hello centry");
    }

    @QueryMapping
    Flux<Document> findAll() {
        return documentRepository.findAll().map(DocumentEntity::toModel);
    }
}
