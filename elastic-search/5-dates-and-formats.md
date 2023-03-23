## Dates In Elastic Search
Elastic search stores dates in epoch format. That is difference of time from 1 January 1970 00:00:00 UT to now in milliseconds.

### Supported Date Formats
- ISO-8601 format: YYYY-MM-DDTHH:mm:ss.sssZ or YYYY-MM-DDTHH:mm:ss.sss±hh:mm
- Unix timestamp: a numeric value representing the number of seconds since January 1, 1970, UTC.
- Epoch milliseconds: a numeric value representing the number of milliseconds since January 1, 1970, UTC.
- Date math expressions: Elasticsearch also supports date math expressions for performing calculations with dates. For example, you can use "now", "1h", "1d", etc. to perform calculations based on the current date/time.

> **Note**
> 
> when querying date/time fields in Elasticsearch, the format used for the query must match the format used for indexing the data. Otherwise, Elasticsearch may not be able to correctly parse the query and return accurate results.


