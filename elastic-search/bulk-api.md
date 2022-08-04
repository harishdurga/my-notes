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
