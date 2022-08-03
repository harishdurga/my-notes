## Managing Documents

### Creating An Index With Default Options
```bash
PUT /<index_name>
```
### Creating An Index With Custom Options
```bash
PUT /<index_name>
{
  "settings": {
    "number_of_replicas": 2,
    "number_of_shards": 2
  }
}
```
#### Create Index Response (Success)
```json
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "<index_name>"
}
```

#### :warning: Elastic search will throw an error when trying create an index which already exists.

### Deleting An Index
```bash
DELETE /<index_name>
```
#### Response (Success)
```json
{
  "acknowledged": true
}
```
#### :warning: Elasticsearch will throw an error when trying to delete an index that doesn't exist.
