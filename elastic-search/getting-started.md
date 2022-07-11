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
## List Nodes In The Cluster
The command is:
```bash
GET _cat/nodes?v
```
The v is a flag to indicate for a more detailed response.
#### Response
| ip | heap.percent | ram.percent | cpu | load_1m | load_5m | load_15m | node.role | master | name |
| -- | ------------ | ----------- | --- | ------- | ------- | -------- | --------- | ------ | ---- |
| 10.46.160.117 | 30 | 65 | 1 | 1.51 | 1.83 | 1.74 | himrst | - | instance-0000000000 |
| 10.46.160.25 | 61 | 86 | 0 | 0.58 | 0.58 | 0.54 | mv | - | tiebreaker-0000000002 |
| 10.46.160.115 | 62 | 67 | 1 | 0.75 | 1.19 | 1.18 | himrst | * | instance-0000000001 |

## List All Indices
The command is:
```bash
GET _cat/indices?v&expand_wildcards=all
```
This will list all indices including system indices which will be used by the ES and Kibana.
#### Response:
| health | status | index | pri | rep | docs.count | docs.deleted | store.size | pri.store.size |
| ------ | ------ | ----- | --- | --- | ---------- | ------------ | ---------- | -------------- |
| green | open | .ent-search-actastic-workplace_search_pre_content_sources_v3-context-workplace_search_account_id-service_type-unique-constraint | Yx6RmkETTkazVt3bLpdZNg | 1 | 1 | 0 | 0 | 450b | 225b |
The `expand_wildcards=all` makes the command return systme indices as well which starts with a `.`.
