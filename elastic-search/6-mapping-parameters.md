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
## `norms` paramater
### More On Norms
In Elasticsearch, norms are used to represent the length of a field’s contents, typically used for scoring documents in search queries. The norms parameter is used to control the behavior of the norms calculations for a specific field.

Norms are used by Elasticsearch's scoring algorithms to give more weight to fields with shorter contents, under the assumption that shorter fields are more likely to be relevant. The norms parameter determines whether or not norms are enabled for a particular field, and how they are calculated.

By default, norms are enabled for all fields except for those of type text and keyword. For fields that do have norms enabled, Elasticsearch calculates the norm value at index time and stores it in a separate data structure, which can be accessed during search time to boost shorter fields.

The norms parameter can be set to true or false to enable or disable norms for a field, respectively. Additionally, you can specify a custom boost value to use in the norms calculation by setting the boost parameter. The boost parameter allows you to control the relative importance of the field in the calculation of the document score.

For example, the following mapping definition sets the norms parameter to false for the description field:
```bash
PUT my_index/_mapping
{
  "properties": {
    "description": {
      "type": "text",
      "norms": false
    }
  }
}

```
In this example, we've disabled norms for the description field by setting "norms": false in the field mapping. 

Storing length information in norms helps to improve the relevance ranking of documents in Elasticsearch search results. This is because shorter fields are usually more relevant to a search query than longer fields.

Elasticsearch uses the norms value, which is a pre-calculated normalized length of each field, to adjust the score of each matching document at query time. Essentially, shorter fields are boosted and receive a higher score than longer fields.

The norms value is calculated by dividing the length of the field's contents by a pre-defined maximum length, such as the length of the longest field in the index. The resulting value is then logarithmically scaled to a value between 0 and 1. The resulting norms value is stored as a single byte, which is why norms are most useful for fields with short or moderate-length contents.

For example, suppose we have two documents with the same term frequency for a given search term, but one document has a shorter description field than the other. When scoring the documents, Elasticsearch will use the norms value for each field to adjust the score. The document with the shorter description field will have a higher norms value, resulting in a higher score and a better ranking in the search results.

It's worth noting that norms are not enabled by default for fields of type text and keyword, as these fields usually contain large amounts of data that can consume a lot of memory. Additionally, norms can be disabled for specific fields by setting the norms parameter to false in the field mapping.



> **Note**
> 
> **Why Not Enabled For Keyword Type?**
> 
> The keyword field type is used for fields that contain exact values, such as IDs or codes, and are not analyzed or tokenized by Elasticsearch. Since keyword fields contain exact values and are not analyzed, there is no need to calculate the length of the field's contents for relevance ranking. In addition, since keyword fields can be multi-valued, calculating the length of each value and storing it as a single byte would not be practical or effective. For these reasons, norms are not enabled by default for keyword fields in Elasticsearch.

## `index` parameter
To disable a field from getting indexed. Can be used with fields that are not used for searching. But these fields can still be used for sorting and aggregation. Disabling index will improve indexing throughput and save disk space.

## `null_value` parameter
null values in ES cannot be indexed/quereied. So we can use the null_value parameter to tell ES to replace null value with the supplied value so that it can be searched. The value that we are replacing with should of the same type as the field mapping.

## `copy_to` parameter
When specified the ES will copy the values of the fields to the target field. Point to note is that the values are copied but not the tokens/analyser output. 
```bash
PUT /sales
{
  "mappings":{
    "properties":{
      "first_name":{
        "type":"text",
        "copy_to":"full_name"
      },
      "last_name":{
        "type":"text",
        "copy_to":"full_name"
      },
      "full_name":{
        "type":"text"
      }
    }
  }
}
```
The value of the full_name/target field won't be a part of the `_source`. 

