### Projection
Projection is like specifying the list of fields we want to retrive from the database.
```bash
db.collection_name.find({},{"field_name":1,"field_name":1})
```
By default `_id` will be included even after using the projection. To exlude it from the result we have explicitly mention that in the projection as
```json
{
  "_id":0
}
```
### Embedded Documents
A document can have another document upto maximum of 100 levels and with max limit as 16mb for a document.

### Working With Arrays


### Datatypes
- Text: Ex:"Max"
- Boolean
- Number: Integer(int32), NumberLong(int64), NumberDecimal(For high precision)Ex: 12.999
- ObjectId
- IsoDate: Ex: ISODate("2021-10-12")
- Timestamp
- Embedded Document
- Array

### Relations Between Data
- Embedded document: Suited for one to one relationship
- Reference: One to many, many to one and many to many

