# Bulk API
Uses NDJSON format.
## Adding/Indexing Multiple Documents
```bash
POST /_bulk
{ "index":{"_index":"<index_name>"} }
{"title":"2BHK Semi Furnished House In VSKP","est_price":{"from":1200500,"to":1500000},"size":{"value":1500,"unit":"sqft"},"address":{"coords":{"lat":80,"lon":90},"city":"Vishakapatnam","dist":"VSKP","pincode":531001,"door_no":"1-1-1"}}
{ "index":{"_index":"<index_name>","_id":"<_id>"} }
{"title":"3BHK Semi Furnished House In VSKP","est_price":{"from":1600500,"to":1900000},"size":{"value":1800,"unit":"sqft"},"address":{"coords":{"lat":80,"lon":90},"city":"Vishakapatnam","dist":"VSKP","pincode":531001,"door_no":"1-1-2"}}
```
### Difference Between Index And Create Action:
Index action will work even if the document exists, but create action will fail if the document already exists with a given id.

## Updating And Deleting On The Same Index
```bash
POST /<index_name>/_bulk
{"update":{"_id":"B07BZ4IBQpure9AC0gxg"}}
{"doc":{"title":"Updated"}}
{"delete":{"_id":"100"}}
```

- One thing to note is that even if one or few of the actions failed, that won't abort the remaining actions in the bulk request.
- The order of execution of the actions is in same as the speicified order.
- Bulk API is useful when were are doing many writes.
- Supports Concurrency control. We can send if_primary_term and if_seq_no in the action metadata.

