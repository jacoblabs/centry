package net.jacoblab.centry.entity;

import lombok.AllArgsConstructor;
import lombok.ToString;
import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Value
@AllArgsConstructor
@ToString
@Document(collection = "documents")
public class DocumentEntity {
    @Id
    String _id;
    String title;
    String content;
    String origin;
    String topic;
    Long createdAt;
}
