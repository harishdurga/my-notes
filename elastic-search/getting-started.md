## What is ES built on top of?
ES is built on top of [Apache Lucene](https://lucene.apache.org/) and written in Java.

## Can an ES node exist without a Cluster?
No. A node is always a part of a Cluster. Either the node will join an existing cluster or it will create it's own cluster.

### Documents are stored within indices always. Indicies are collection of logically related documents.

## Cluster Health API
To access the cluster health API from the console in the UI the query would be
```bash
GET _cluster/health
```
APIs are started with _ by convention.
#### Response
```json
{
  "cluster_name": "0716b9bed1304219ad02fa53cce46efc",
  "status": "green", //indicates the status of the cluster. Green is means cluster is healthy.
  "timed_out": false,
  "number_of_nodes": 3,
  "number_of_data_nodes": 2,
  "active_primary_shards": 76,
  "active_shards": 152,
  "relocating_shards": 0,
  "initializing_shards": 0,
  "unassigned_shards": 0,
  "delayed_unassigned_shards": 0,
  "number_of_pending_tasks": 0,
  "number_of_in_flight_fetch": 0,
  "task_max_waiting_in_queue_millis": 0,
  "active_shards_percent_as_number": 100
}
```
