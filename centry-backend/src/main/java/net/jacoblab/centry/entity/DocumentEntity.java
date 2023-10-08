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

    public net.jacoblab.centry.entity.Document toModel(){
        return new net.jacoblab.centry.entity.Document(0L,this.title,this.content,this.origin,this.topic,this.createdAt);
    }
}
