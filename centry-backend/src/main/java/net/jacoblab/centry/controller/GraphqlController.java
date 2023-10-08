package net.jacoblab.centry.controller;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Mono;

@Controller
public class GraphqlController {

    @QueryMapping
    Mono<String> hello() {
        return Mono.just("hello centry");
    }
}
