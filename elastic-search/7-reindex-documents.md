# Re-index Documents With Reindex API
Simple Version:
```bash
POST _reindex
{
  "source": {
    "index": "my-index-000001"
  },
  "dest": {
    "index": "my-new-index-000001"
  }
}
```

But this API supports a lot of other options like updating values in `_source`, deleting some fields, accepts `query` so that we can reindex documents that are matching the query
conditions.

This operation works in batches so that it can handle reindexing of millions of documents.


Ref Link:

[https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html)
