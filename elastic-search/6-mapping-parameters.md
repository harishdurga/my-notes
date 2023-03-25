# Mapping Parameters

## format parameter for Date Fields
Ex:
```json
{
  "mappings":{
    "properties":{
      "created_at":{
        "type":"date",
        "format":"epoch_second or dd/MM/yyyy"
      }
    }
  }
}
```
## properties parameter

<pre>
  {
  "mappings":{
    <span style="color:red;"><b>"properties"</b></span>:{
      "created_at":{
        "type":"date",
        "format":"epoch_second or dd/MM/yyyy"
      }
    }
  }
}
</pre>

## coerce parameter
Used to enable/disable coercion of values. Enabled by default. Can be defined at field and index level.
To disable at index level
```json
{
  "settings":{
    "index.mappings.coerce":false
  }
}
```

## Doc Values
In Elasticsearch, doc values are a data structure that stores a copy of the field's values in a column-oriented fashion, optimized for reading data.

When you index a document, Elasticsearch stores the field values in a complex data structure called an inverted index, which is optimized for searching and is not optimized for reading data. On the other hand, doc values are a separate data structure that stores a copy of the field values in a simpler, column-oriented format that is optimized for reading data.

By using doc values, Elasticsearch can quickly access and read the values of fields for various operations like aggregations, sorting, and scripting. This helps to speed up these operations and improve search performance.

In simple terms, doc values are a way to store and retrieve field values in a more efficient manner, which can help improve the performance of your Elasticsearch queries.

Let's say you have an Elasticsearch index with a "name" field, which contains the names of various people. Without doc values, Elasticsearch would store this data in the inverted index, which would look something like this:
```js
term        document IDs
-------------------------
"John"      1, 3, 5, 7
"Jane"      2, 4, 6, 8
```

In this inverted index, each unique term in the "name" field is mapped to a list of document IDs that contain that term. So, if you search for documents containing the name "John", Elasticsearch would look up the document IDs associated with the term "John" in the inverted index and return the corresponding documents.

However, if you enable doc values for the "name" field, Elasticsearch would create a separate data structure that stores a copy of the values in a more efficient way. This separate data structure would look something like this:
```js
document ID    name
--------------------
1              "John"
2              "Jane"
3              "John"
4              "Jane"
5              "John"
6              "Jane"
7              "John"
8              "Jane"

```
In this data structure, each document ID is mapped to the corresponding value in the "name" field. When you enable doc values for a field, Elasticsearch creates a data structure like this for that field.

The benefit of using doc values is that they provide faster access to field values than the inverted index. This is because the doc values data structure is optimized for random access, whereas the inverted index is optimized for term-based search. So, if you need to access field values directly, rather than searching for documents based on a term, doc values can provide faster and more efficient access to that data.

## `doc_values` property
- Can be diabled to save disk space.
- By default doc values is disabled.
> **Warning**
> 
> Cannot be changed without reindexing documents into new index

> **Note** 
>
>  _Doc values are supported on almost all field types, with the notable exception of text and annotated_text fields._
> 
> Doc values are not supported for text and annotated text fields in Elasticsearch because these fields contain variable-length text data, which makes it difficult to efficiently store them in a separate data structure like doc values. Unlike numeric or date fields, which have fixed-length values that can be easily stored and sorted, text and annotated text fields can contain text strings of different lengths, which makes it challenging to store and access them in a contiguous block of memory. Furthermore, since text and annotated text fields are often used for full-text search, the inverted index is a more efficient and effective data structure for these fields. The inverted index allows for term-based searching and supports features like stemming and tokenization that are important for text analysis. In summary, doc values are not used for text and annotated text fields in Elasticsearch because they are not well-suited to the variable-length nature of text data and because the inverted index is a better data structure for full-text search.

### Enabling doc values for a field
```bash
PUT my_index/_mapping
{
  "properties": {
    "name": {
      "type": "keyword",
      "doc_values": true
    }
  }
}
```
